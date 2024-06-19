import {useContext, createContext, useState} from "react";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const login = (userData) => {
        localStorage.setItem('token', userData.token);
        setUser(userData);
    };
    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };
    return (
      <AuthContext.Provider value={{ user, login, logout }}>
          {children}
      </AuthContext.Provider>
    );
};