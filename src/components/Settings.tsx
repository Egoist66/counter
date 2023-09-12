import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import styled from "styled-components";
import Text from "../service-components/Text/Text";
import SectionWrapper from "../service-components/Wrapper/SectionWrapper";
import {Button} from "./Button";
import {LS} from "../utils/utils";
import {CountStateType} from "../engine-hooks/useCounterEngine";
import {SettingProps, useSettings} from "../engine-hooks/useSettings";

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


export const Settings: FC<SettingProps> = (props) => {

    const {handleMaxValue, handleStartValue, saveValues} = useSettings(props)

    const {
        setCounterState,
        isSettingCounter,
        isDisabledBtn,
        startValue,
        maxValue,
        setView,
        countState
    } = props


    return (

        <StyledSetting>
            <SectionWrapper gap={'30px'} align_center={'baseline'}>

                <Text font_weight={700} font_size={'18px'}>max value:</Text>
                <Text>
                    <StyledInput
                        className={countState.maxValueError ? 'error-input': ''}
                        min={0}
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
                <Button

                    text={'Back'}
                    onClickHandler={() => setView ? setView(true) : null}
                />
            </SectionWrapper>

        </StyledSetting>
    );
};

