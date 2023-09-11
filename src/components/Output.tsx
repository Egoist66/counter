import { FC, ReactElement, ReactNode } from "react";

type OutPutProps = {
    count: number
    render?: () => ReactElement | ReactNode
    error: boolean
}

export const OutPut: FC<OutPutProps> = ({count, render, error}) => {
    return (
        <div id="out">

            {render ? render() : <p className={count >= 5 ? 'limit-count': ''}>{
                error ? 'Value is not correct' : 'Enter values and press "set"'
            }</p>}

        </div>
    )
}