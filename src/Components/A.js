import React, { useState, createContext } from 'react'
import B from './B'

const themes = {
    light: {
        background: "#eee",
        color: "#000",
    },
    dark: {
        background: "#222",
        color: "#fff",
    }
}
// const name = createContext()

const ThemesContext = createContext(themes);


export default function A() {
    const [mode, setMode] = useState(themes.dark)
    const modeChangeHandler = () => {
        setMode(mode => {
            if (mode === themes.dark) {
                return mode = themes.light
            } else if (mode === themes.light) {
                return mode = themes.dark
            } else {
                return mode
            }
        })
    }
    return (
        <div>
            A
            <button onClick={modeChangeHandler}>Change mode</button>
            <ThemesContext.Provider value={mode}>
                <B></B>
            </ThemesContext.Provider>
        </div>
    )
}

export { ThemesContext };