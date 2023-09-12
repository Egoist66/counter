import {ChangeEvent, useEffect} from "react";
import {LS} from "../utils/utils";
import {CountStateType} from "./useCounterEngine";

 export type SettingProps = {
    setCounterState: (arg: CountStateType) => void,
    setView?: (arg: boolean) => void
    countState: CountStateType
    maxValue: number
    maxRangeError: boolean
    startValue: number
    isDisabledBtn: boolean
    isSettingCounter: boolean
}


export const useSettings = (props: SettingProps) => {

    const {save, get, exist} = LS()


    const {
        isSettingCounter,
        setCounterState,
        countState,
        maxRangeError,
        startValue,
        maxValue,
        isDisabledBtn
    } = props
    const isNotValidValues = () => {

        if (maxValue < startValue || maxValue === startValue) {
            setCounterState({
                ...countState,
                maxRangeError: true,
                maxValueError: true,
                startValueError: true
            })
        } else if (startValue > maxValue) {
            setCounterState({
                ...countState,
                maxRangeError: true,
                startValueError: true,
                maxValueError: false
            })
        } else {
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
            isDisabledBtn: false,
            isIncrementDisabledWhileEditing: true
        })

    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {

        setCounterState({
            ...countState,
            maxValue: Number(e.currentTarget.value),
            isSettingCounter: true,
            isDisabledBtn: false,
            isIncrementDisabledWhileEditing: true
        })
    }

    const saveValues = () => {
        save('maxValue', maxValue)
        save('startValue', startValue)

        setCounterState({
            ...countState,
            isDisabledBtn: true,
            isIncrementDisabledWhileEditing: false,
            isSettingCounter: false
        })
    }


    useEffect(() => {
        isNotValidValues()
    }, [maxValue, startValue])


    return {
        handleMaxValue,
        handleStartValue,
        isSettingCounter,
        maxRangeError,
        isDisabledBtn,
        maxValue,
        startValue,
        saveValues
    }

}