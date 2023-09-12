import {FC} from "react";
import SectionWrapper from "../service-components/Wrapper/SectionWrapper";
import {Settings} from "./Settings";
import {useCounterEngine} from "../engine-hooks/useCounterEngine";
import {CounterControls} from "./CounterControls";
import {useView} from "../engine-hooks/useView";


export const Counter: FC = () => {

    const {state, setState} = useCounterEngine()
    const {setView, isCounterinView} = useView()


    return (

        <SectionWrapper>

            {isCounterinView ? <CounterControls setView={setView}/> : <Settings
                isSettingCounter={state.isSettingCounter}
                maxRangeError={state.maxRangeError}
                maxValue={state.maxValue}
                startValue={state.startValue}
                setCounterState={setState}
                setView={setView}
                isDisabledBtn={state.isDisabledBtn}
                countState={state}
            />
            }



        </SectionWrapper>
    )
}