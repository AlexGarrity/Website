import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import FilesWindow from "./components/fileswindow";
import Taskbar from "./components/taskbar";
import Icon from "./components/icon";

import Terminal from './Terminal.svg'
import Files from './Files.svg'
import TerminalWindow from "./components/terminalwindow";

export const WindowsContext = createContext<{windows: Set<string> | null, setWindows: Dispatch<SetStateAction<Set<string>>> | null}>({windows: null, setWindows: null})

function App() {
    const [windows, setWindows] = useState(new Set<string>())

    return (
        <WindowsContext.Provider value={{windows: windows, setWindows: setWindows}}>
            <div className={"flex flex-col p-4 space-y-4 max-h-screen max-w-screen m-0"}>
                <Icon image={Terminal} label={"Terminal"} windowName={"terminal"}></Icon>
                <Icon image={Files} label={"File Browser"} windowName={"files"}></Icon>
            </div>
            <TerminalWindow></TerminalWindow>
            <FilesWindow></FilesWindow>
            <Taskbar></Taskbar>
        </WindowsContext.Provider>
    );
}

export default App;
