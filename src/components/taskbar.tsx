import React, {useContext, useEffect, useRef, useState} from "react";
import {WindowsContext} from "../App";

import Profile from '../Profile.jpg'

interface MenuItemProps {
    label: string
    windowName: string
}

export default function Taskbar() {
    const {windows, setWindows} = useContext(WindowsContext)
    const [menuShown, setMenuShown] = useState(false);
    const clock : React.MutableRefObject<null | HTMLParagraphElement> = useRef(null)

    useEffect(() => {
        setInterval(() => {
            if (!clock.current)
                return
            clock.current.innerText = new Date().toLocaleTimeString();
        }, 999);
    },
        [])

    function MenuItem(props: MenuItemProps) {
        return (
            <button className={"text-left hover:text-slate-600"}
                    onClick={() => {
                        if (!setWindows)
                            return
                        const newSet = new Set(windows).add(props.windowName);
                        setWindows(newSet);
                    }}>{props.label}</button>
        );
    }

    return (
        <>
            <div className={"absolute bottom-10 bg-slate-200 drop-shadow-2xl shadow-black"}
                 style={{visibility: menuShown ? 'visible' : 'hidden'}}>
                <div className={"flex flex-col h-full w-full border border-slate-400 text-2xl"}>
                    <span className={"flex flex-row bg-slate-100 p-3 border-b-2 border-slate-300"}>
                        <p className={"flex-grow align-middle place-self-center"}>Welcome, Guest</p>
                        <img className={"ml-8 border-2 border-slate-300"} alt={"Profile"} width={64}
                             src={Profile}></img>
                    </span>
                    <hr></hr>
                    <div className={"p-3 flex flex-col space-y-6 justify-start border-black mb-8"}>
                        <MenuItem label={"File Browser"} windowName={"files"}/>
                        <MenuItem label={"AgSoft PictureView™"} windowName={"pictures"}/>
                        <MenuItem label={"DocWriter Plus"} windowName={"documents"}/>
                        <MenuItem label={"BlockGame 2D"} windowName={"blockgame"}/>
                        <MenuItem label={"Terminal"} windowName={"Terminal"}/>
                    </div>
                    <div className={"p-3 flex flex-col"}>
                        <button onClick={() => {
                            window.close();
                            alert(`
This would close the tab but, to my knowledge, there's no way of doing that without using a script to open it in the first place such that the tab has no history.
I could probably add a script on the landing page to open this in a new tab, but that's more tabs and potentially annoying for the user.
                        
If you don't mind, could you close the tab and pretend it worked? That'd be great. (Unless you just wanted to find out what the button does)`);
                        }} className={"text-right pr-3 text-red-800 hover:text-red-400"}>Log Out <p
                            className={"inline pl-2"}>&#9211;</p></button>
                    </div>
                </div>
            </div>
            <div
                className={"w-screen absolute bottom-0 h-10 bg-slate-200 flex justify-start items-center text-2xl px-2"}>
                <button className={"px-8"} onClick={() => setMenuShown(!menuShown)}>Start</button>
                <span className={"text-slate-300 px-4 flex"}>|</span>
                {windows ? Array.from(windows).map((v, i) => {
                    return <span key={"tb" + v + i} className={"capitalize px-4"}>{v}</span>
                }) : null}
                <span className={"flex-grow text-right font-mono"}>
                    <p ref={clock}></p>
                </span>
            </div>
        </>
    )
}