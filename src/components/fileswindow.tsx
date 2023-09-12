import Window from "./window";
import React from "react";
import Icon from "./icon";

import Text from '../Text.svg'
import Image from '../Image.svg'

export default function FilesWindow() {
    return (
        <Window id={"files"} title={"File Browser"} position={[20, 20]}>
            <div className={"bg-slate-100 p-2 text-slate-950"}>
                <Icon image={Text} label={"CV.pdf"} windowName={"documents"}></Icon>
                <Icon image={Image} label={"Cat.png"} windowName={"images"}></Icon>
            </div>
        </Window>
    )
}