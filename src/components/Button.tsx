import { FC } from "react";

type ButtonProps = {
    text: string
    onClickHandler: () => void
    _disabled?: boolean
}

export const Button: FC<ButtonProps> = ({onClickHandler, text, _disabled}) => {
    return <button disabled={_disabled} onClick={onClickHandler}>{text}</button>
}