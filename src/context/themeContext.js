import { createContext, useState } from "react";
const ThemeContext = createContext()
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light")
    const values = {
        theme,
        setTheme
    }
    return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}
export default ThemeContext