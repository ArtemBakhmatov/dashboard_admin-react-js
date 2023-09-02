import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,        // чат
    cart: false,        // Корзина
    userProfile: false, // профиль
    notification: false // уведомления
};

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(undefined);
    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    };

    const handleClick = (clicked) => {
        setIsClicked({ ...initialState, [clicked]: true });
    }

    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu,
                isClicked: isClicked,
                setIsClicked: setIsClicked,
                handleClick: handleClick,
                screenSize: screenSize,
                setScreenSize: setScreenSize,
                currentColor: currentColor,
                setCurrentColor: setCurrentColor,
                currentMode: currentMode,
                setCurrentMode: setCurrentColor,
                themeSettings: themeSettings,
                setThemeSettings: setThemeSettings,
                setMode: setMode,
                setColor: setColor
            }}
        >
            { children }
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);