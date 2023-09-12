import React, {FC} from "react";
import {Button} from "./Button";
import {useCounterEngine} from "../engine-hooks/useCounterEngine";
import {OutPut} from "./Output";

type OutPutAndControlsType = {
    setView: (arg: boolean) => void
}

export const CounterControls: FC<OutPutAndControlsType> = ({setView}) => {

    const {state, changeCount, resetCount} = useCounterEngine()

    const resultMessageClassName = state.count >= state.maxValue ? 'limit-count' : ''
    const counterMessage = <h2 className={resultMessageClassName}>{state.count}</h2>


    return (

        <div id="counter">

            <div style={{textAlign: 'center'}}>

                <OutPut render={() => counterMessage}  />

                <Button
                    _disabled={state.count >= state.maxValue || state.maxRangeError || state.isIncrementDisabledWhileEditing}
                    onClickHandler={changeCount("increment")}
                    text="Increment"
                />

                <Button
                    _disabled={state.count === 0}
                    onClickHandler={resetCount}
                    text="Reset"
                />
                <Button

                    onClickHandler={() => setView(false)}
                    text="Show settings"
                />

            </div>

        </div>

    )
}