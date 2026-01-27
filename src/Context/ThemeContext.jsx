import { createContext, useState } from "react";


export const ThemeContext = createContext([false, () => {}]);

// export function ThemeProvider({children}) {
//     const [darkMode, isDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))

//     return <ThemeContext.Provider value={[darkMode, isDarkMode]}>
//         {
//             children
//         }
//     </ThemeContext.Provider>
// }

export function ThemeProvider({children}) {
    const [darkMode, isDarkMode] = useState(JSON.parse(localStorage.getItem("DarkMode")))

    return <ThemeContext.Provider value={[darkMode, isDarkMode]}>
        {children}
    </ThemeContext.Provider>
}