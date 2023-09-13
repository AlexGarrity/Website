import React, {createContext, Dispatch, SetStateAction, useState} from 'react';
import FilesWindow from "./components/fileswindow";
import Taskbar from "./components/taskbar";
import TerminalWindow from "./components/terminalwindow";

export const WindowsContext = createContext<{windows: Set<string> | null, setWindows: Dispatch<SetStateAction<Set<string>>> | null}>({windows: null, setWindows: null})

function App() {
    const [windows, setWindows] = useState(new Set<string>())

    return (
        <WindowsContext.Provider value={{windows: windows, setWindows: setWindows}}>
            <TerminalWindow></TerminalWindow>
            <FilesWindow></FilesWindow>
            <Taskbar></Taskbar>
        </WindowsContext.Provider>
    );
}

export default App;
