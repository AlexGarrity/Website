import React, {useContext} from "react";
import {WindowsContext} from "../App";

export default function Taskbar() {
    const {windows, setWindows} = useContext(WindowsContext)

    return (
        <div
            className={"w-screen absolute bottom-0 h-10 bg-slate-200 flex justify-start items-center text-2xl px-2"}>
            <span className={"px-8"}>Start</span>
            <span className={"text-slate-300 px-4 flex"}>|</span>
            {windows ? Array.from(windows).map((v, i, a) => {
                return <span key={"tb" + v} className={"capitalize px-4"}>{v}</span>
            }) : null}
        </div>
    )
}