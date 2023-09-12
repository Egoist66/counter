import {useState} from "react";

export const useView = () => {
    const [isCounterinView, setView] = useState<boolean>(true)

    return {
        isCounterinView,
        setView
    }
}