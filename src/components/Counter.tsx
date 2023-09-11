import {FC, useEffect, useState} from "react";
import { OutPut } from "./Output";
import { Button } from "./Button";
import SectionWrapper from "../service-components/Wrapper/SectionWrapper";
import {Settings} from "./Settings";
import {LS} from "../utils/utils";


export type CountStateType = {
    maxValue: number
    startValue: number,
    count: number
    maxRangeError: boolean
    startValueError: boolean
    maxValueError: boolean
    isDisabledBtn: boolean
    isSettingCounter: boolean

};

type CounterHandlerTypes = 'increment' | 'decrement'



export const Counter: FC = () => {

    const {exist, get, ls} = LS()

    const [state, setState] = useState<CountStateType>({
        maxValue: 0,
        count: 0,
        startValue: 0,
        maxRangeError: false,
        startValueError: false,
        maxValueError: false,
        isDisabledBtn: true,
        isSettingCounter: false
    });

    const changeCount = (flow: CounterHandlerTypes): any => {

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
            count: get('startValue')
        });
    };


    useEffect(() => {
        setState({
            ...state,
            maxValue: exist('maxValue') ? get('maxValue') : 0,
            startValue: exist('startValue') ? get('startValue'): 0,
            count: exist('startValue') ? get('startValue'): 0
        })
    }, [])



    const resultMessageClassName = state.count >= state.maxValue || state.maxRangeError ? 'limit-count': ''
    const resultMessage = <h2 className={resultMessageClassName}>{
        state.maxRangeError ? 'Value is not correct' : 'Enter values and press "set"'
    }</h2>

    const counterMessage = <h2 className={resultMessageClassName}>{state.count}</h2>

    return (

       <SectionWrapper direction={'column'} _justify={'center'} gap={'40px'}>

           <Settings
               isSettingCounter={state.isSettingCounter}
               maxValue={state.maxValue}
               startValue={state.startValue}
               setCounterState={setState}
               isDisabledBtn={state.isDisabledBtn}
               countState={state}
           />

           <div id="counter">

               <OutPut
                   error={state.maxRangeError}
                   count={state.count}
                   render={() => state.isSettingCounter ? resultMessage : counterMessage}
               />


               <div style={{textAlign: 'center'}}>

                   <Button
                       _disabled={state.count >= state.maxValue || state.maxRangeError}
                       onClickHandler={changeCount("increment")}
                       text="Increment"
                   />

                   <Button
                       _disabled={state.count === 0}
                       onClickHandler={resetCount}
                       text="Reset"
                   />

               </div>

           </div>


       </SectionWrapper>
    )
}