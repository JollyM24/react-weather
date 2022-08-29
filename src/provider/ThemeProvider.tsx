import { ReactNode, useState } from "react";
import { Theme, ThemeContext } from "../context/ThemeContext";
import { ChangeSccRootVariables } from "../model/ChangeCssRootVariables";
import { storage } from "../model/Storage";

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({children, ...props}: Props) => {
    const [theme, setTheme] = useState<Theme>(storage.getItem('theme') || Theme.LIGHT);
    
    ChangeSccRootVariables(theme);

    function changeTheme(theme: Theme) {
        storage.setItem('theme', theme);
        setTheme(theme);
        ChangeSccRootVariables(theme);
    }

    return (
    <ThemeContext.Provider value={{
        theme, 
        changeTheme
    }}
    {...props}
    >{children}</ThemeContext.Provider>)
}