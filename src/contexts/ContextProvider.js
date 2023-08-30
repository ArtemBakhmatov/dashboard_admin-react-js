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
                setScreenSize: setScreenSize
            }}
        >
            { children }
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);