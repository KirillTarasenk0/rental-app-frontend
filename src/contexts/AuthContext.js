import {useContext, createContext, useState} from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [userStatus, setUserStatus] = useState(null);
    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        setUserStatus(userData);
    };
    const logout = () => {
        localStorage.removeItem('token');
        setUserStatus(null);
    };
    return (
      <AuthContext.Provider value={{ userStatus, login, logout }}>
          {children}
      </AuthContext.Provider>
    );
};