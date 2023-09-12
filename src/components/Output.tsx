import { FC, ReactElement, ReactNode } from "react";

type OutPutProps = {
    render: () => ReactElement | ReactNode
}

export const OutPut: FC<OutPutProps> = ({render}) => {
    return (
        <div id="out">

            {render()}

        </div>
    )
}