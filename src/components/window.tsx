import React, {ReactNode, useContext, useEffect, useState} from "react";
import {WindowsContext} from "../App";

interface WindowProps {
    children: ReactNode | ReactNode[],
    id: string,
    title: string,
    position: [number, number]
}

export default function Window(props: WindowProps) {
    const [visible, setVisible] = useState(false)
    const {windows, setWindows} = useContext(WindowsContext)

    const [position, setPosition] = useState(props.position)

    useEffect(() => {
        if (windows)
            setVisible(windows.has(props.id))
    }, [props.id, windows]);

    function Content() {
        return (
            <div className={"flex flex-col text-white fixed"} style={{"left": position[0], "top": position[1]}} draggable
                 onDragEndCapture={e => setPosition([e.pageX, e.pageY])}
                 id={props.id}>
                <div className={"w-full bg-slate-500 p-1 px-3 rounded-t-lg text-center flex font-mono"}>
                    <h2 className={"flex-grow"}>{props.title}</h2>
                    <button className={""} onClick={() => {
                        if (!setWindows)
                            return

                        setWindows(prevState => {
                            const newState = new Set(prevState);
                            newState.delete(props.id);
                            return newState;
                        })
                    }
                    }>
                        &#x2715;
                    </button>
                </div>
                {props.children}
            </div>
        )
    }

    return (visible) ? <Content></Content> : null;
}