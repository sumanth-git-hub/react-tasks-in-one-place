import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

// export function useTheme() {
//     return useContext(ThemeContext)
// }

export const useTheme = () => useContext(ThemeContext)