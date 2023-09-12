import {useEffect, useState} from "react";
import {LS} from "../utils/utils";

export type CounterHandlerTypes = 'increment' | 'decrement'

export type CountStateType = {
    maxValue: number
    startValue: number,
    count: number
    maxRangeError: boolean
    startValueError: boolean
    maxValueError: boolean
    isDisabledBtn: boolean
    isIncrementDisabledWhileEditing: boolean
    isSettingCounter: boolean

};


export const useCounterEngine = () => {

    const {exist, get, ls} = LS()


    const [state, setState] = useState<CountStateType>({
        maxValue: 5,
        count: 0,
        startValue: 0,
        maxRangeError: false,
        startValueError: false,
        maxValueError: false,
        isDisabledBtn: true,
        isSettingCounter: false,
        isIncrementDisabledWhileEditing: false
    });


    const changeCount = (flow: CounterHandlerTypes) => {

        return () => {
            switch (flow) {
                case 'increment':
                    setState((state => ({
                        ...state,
                        count: state.count + 1
                    })));


                    break;
                case "decrement":
                    setState((state => ({
                        ...state,
                        count: state.count - 1
                    })));
                    break;
                default:
                    return state.startValue;
            }

        }
    };


    const resetCount = () => {
        setState({
            ...state,
            maxValueError: false,
            maxRangeError: false,
            startValueError: false,
            count: get('startValue') || state.startValue
        });
    };


    useEffect(() => {
        setState({
            ...state,
            maxValue: exist('maxValue') ? get('maxValue') : state.maxValue,
            startValue: exist('startValue') ? get('startValue'): state.startValue,
            count: exist('startValue') ? get('startValue'): 0
        })
    }, [])


    return {
        state,
        setState,
        resetCount,
        changeCount
    }

}