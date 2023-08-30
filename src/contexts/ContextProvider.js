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
    return (
        <StateContext.Provider
            value={{
                activeMenu: activeMenu,
                setActiveMenu: setActiveMenu
            }}
        >
            { children }
        </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);