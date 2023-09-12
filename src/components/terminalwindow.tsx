import React, {useEffect, useRef, useState} from "react";
import Window from "./window";

export default function TerminalWindow() {

    const [text, setText] = useState(['$> '])
    const [currentLine, setCurrentLine] = useState(0);

    const input: React.MutableRefObject<null | HTMLDivElement> = useRef(null)

    useEffect(() => {
        if (input.current)
            input.current.focus()
    }, [text]);

    return (
        <Window id={"terminal"} title={"Terminal"} position={[20, 20]}>
            <div ref={input} className={"bg-slate-900 flex-shrink p-2 overflow-x-hidden overflow-y-scroll"} style={{"height": "24em", "width": "80ch"}} tabIndex={1} autoFocus onKeyDown={e => {
                if (e.code === "Enter") {
                    setText([...text, '$> '])
                    setCurrentLine(currentLine + 1)
                    return
                }

                if (!e.code.startsWith('Key') && e.code !== 'Space')
                    return

                const newLine = text[currentLine] + e.key.toLowerCase()
                const newText = [...text]
                newText[currentLine] = newLine
                setText(newText);
                console.log(e.key)

            }}>
                {text.map((v, i) => {
                    return (<p key={"terminal-" + i}>
                        {v}
                    </p>)
                })}

            </div>
        </Window>
    )
}