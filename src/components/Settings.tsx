import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from "styled-components";
import Text from "../service-components/Text/Text";
import SectionWrapper from "../service-components/Wrapper/SectionWrapper";
import {Button} from "./Button";
import {LS} from "../utils/utils";
import {CountStateType} from "./Counter";

const StyledSetting = styled.div`
  
    border: 2px solid #008B8B;
    padding: 20px;
    border-radius: 5px ;

`

const StyledInput = styled.input`
  display: block;
  border: 2px solid #008B8B;
  outline: none;
  border-radius: 5px;
  padding: 7px;
  font-size: 20px;
  margin-bottom: 40px;
  color: #008B8B;
  font-weight: 700;
  text-align: center;
`

type SettingProps = {
    setCounterState: (arg: CountStateType) => void,
    countState: CountStateType
    maxValue: number
    startValue: number
    isDisabledBtn: boolean
    isSettingCounter: boolean
}

export const Settings: FC<SettingProps> = ({setCounterState, isSettingCounter, isDisabledBtn, startValue, maxValue, countState}) => {
    const {save, get, exist} = LS()

    const isNotValidValues = () => {

        if(maxValue < startValue){
            setCounterState({
                ...countState,
                maxRangeError: true,
                maxValueError: true,
                startValueError: true
            })
        }
        else if(maxValue === startValue ){
            setCounterState({
                ...countState,
                maxRangeError: true,
                maxValueError: true,
                startValueError: true
            })
        }
        else if(startValue > maxValue){
            setCounterState({
                ...countState,
                maxRangeError: true,
                startValueError: true,
                maxValueError: false
            })
        }
        else {
            setCounterState({
                ...countState,
                maxRangeError: false,
                maxValueError: false,
                startValueError: false
            })
        }


    }

    const handleStartValue = (e: ChangeEvent<HTMLInputElement>) => {
        setCounterState({
            ...countState,
            startValue: Number(e.currentTarget.value),
            isSettingCounter: true,
            isDisabledBtn: false
        })

    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        setCounterState({
            ...countState,
            maxValue: Number(e.currentTarget.value),
            isSettingCounter: true,
            isDisabledBtn: false
        })
    }

    const saveValues = () => {
        save('maxValue', maxValue)
        save('startValue', startValue)
        setCounterState({
            ...countState,
            isDisabledBtn: true,
            isSettingCounter: false
        })
    }


    useEffect(() => {
        isNotValidValues()
    }, [maxValue, startValue])



    return (

        <StyledSetting>
            <SectionWrapper gap={'30px'} align_center={'baseline'}>

                <Text font_weight={700} font_size={'18px'}>max value:</Text>
                <Text>
                    <StyledInput
                        className={countState.maxValueError ? 'error-input': ''}
                        min={0}
                        disabled={countState.count >= countState.maxValue}
                        onChange={handleMaxValue}
                        type={'number'}
                        value={maxValue}
                        data-value={maxValue}
                        name={'max-value'}
                    />
                </Text>

            </SectionWrapper>

            <SectionWrapper gap={'30px'} align_center={'baseline'}>

                <Text font_weight={700} font_size={'18px'}>start value:</Text>
                <Text>
                    <StyledInput
                        className={countState.startValueError ? 'error-input': ''}
                        min={0}
                        disabled={countState.count >= countState.maxValue}
                        type={'number'}
                        value={startValue}
                        data-value={startValue}
                        onChange={handleStartValue}
                        name={'start-value'}
                    />
                </Text>

            </SectionWrapper>

            <SectionWrapper _justify={'center'}>
                <Button
                    _disabled={countState.startValueError || countState.maxValueError ? true : isDisabledBtn}
                    text={'Set'}
                    onClickHandler={saveValues}
                />
            </SectionWrapper>

        </StyledSetting>
    );
};

