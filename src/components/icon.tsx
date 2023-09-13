import React, {useContext} from "react";
import {WindowsContext} from "../App";

interface IconProps {
    image: string
    label: string
    windowName: string
}

export default function Icon(props: IconProps) {
    const {setWindows} = useContext(WindowsContext)


    return (
        <button className={"w-24 p-1 hover:border border-dashed border-slate-500"} onClick={() => {
            if (!setWindows)
                return
            setWindows(prevState => {
                    return new Set(prevState).add(props.windowName);
                }
            )
        }}>
            <div className={"h-24 text-center"}>
                <img alt={"Thumbnail for '%s'".replace("%s", props.windowName)} className={"mx-auto my-auto"} width={96} src={props.image}></img>
            </div>
            <p className={"w-full"}>
                {props.label}
            </p>
        </button>
    );
}