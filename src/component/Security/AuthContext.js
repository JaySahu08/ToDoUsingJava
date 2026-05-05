import { createContext, createElement, useCallback, useContext, useMemo, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children}){
    const [isAuthenticated , setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const login = useCallback((username, password) => {
        if(username === 'jay' && password === 'dummy'){
            setIsAuthenticated(true);
            setUsername(username);
            return true;
        }

        setIsAuthenticated(false);
        setUsername('');
        return false;
    }, []);

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUsername('');
    }, []);

    const value = useMemo(() => ({
        isAuthenticated,
        username,
        login,
        logout
    }), [isAuthenticated, username, login, logout]);

    return createElement(AuthContext.Provider, {value}, children);
}
