import {FC} from "react";
import {OutPut} from "./Output";
import {Button} from "./Button";
import {useCounterEngine} from "../engine-hooks/useCounterEngine";

type OutPutAndControlsType = {
    setView: (arg: boolean) => void
}

export const OutPutAndControls: FC<OutPutAndControlsType> = ({setView}) => {

    const {state, changeCount, resetCount} = useCounterEngine()

    const resultMessageClassName = state.count >= state.maxValue || state.maxRangeError ? 'limit-count' : ''
    const resultMessage = <h2 className={resultMessageClassName}>{
        state.maxRangeError ? 'Value is not correct' : 'Enter values and press "set"'
    }</h2>

    const counterMessage = <h2 className={resultMessageClassName}>{state.count}</h2>

    return (

        <div id="counter">

            <OutPut
                error={state.maxRangeError}
                count={state.count}
                render={() => state.isSettingCounter ? resultMessage : counterMessage}
            />


            <div style={{textAlign: 'center'}}>

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