import {useContext, createContext, useState, useEffect} from "react";
import axios from "axios";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) => {
    const [userStatus, setUserStatus] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://127.0.0.1:8000/api/user', {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        },
                    });
                    setUserStatus(response.data);
                } catch (error) {
                    console.error('Failed to fetch user data:', error);
                    setUserStatus(null);
                }
            } else {
                setUserStatus(null);
            }
        };
        getUser();
    }, []);
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