import {FC} from "react";
import SectionWrapper from "../service-components/Wrapper/SectionWrapper";
import {Settings} from "./Settings";
import {useCounterEngine} from "../engine-hooks/useCounterEngine";
import {OutPutAndControls} from "./OutPutAndControls";
import {useView} from "../engine-hooks/useView";


export const Counter: FC = () => {

    const {state, setState, changeCount, resetCount} = useCounterEngine()
    const {setView, isCounterinView} = useView()


    return (

        <SectionWrapper>

            {isCounterinView ? <OutPutAndControls setView={setView}/> : <Settings
                isSettingCounter={state.isSettingCounter}
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