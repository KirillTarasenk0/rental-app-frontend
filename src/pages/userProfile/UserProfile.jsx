import './UserProfile.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export const UserProfile = () => {
    const { userStatus } = useAuth();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://127.0.0.1:8000/api/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            setUser(response.data);
        };
        getUser();
    }, []);
    return (
        <div className="user-profile">
            <h1 className="user-profile__title">User Profile</h1>
            {user ? (
                <div className="user-profile__details">
                    <p className="user-profile__welcome">Welcome, {user.name}!</p>
                    <p className="user-profile__info"><span className="user-profile__label">Email:</span> {user.email}</p>
                    <p className="user-profile__info"><span className="user-profile__label">Role:</span> {user.role}</p>
                    <div className="user-profile__avatar">
                        <span className="user-profile__label">Avatar:</span>
                        <img className="user-profile__image" src={user.avatar} alt="User Avatar" />
                    </div>
                    <button className="user-profile__button" onClick={() => navigate('/settings/editProfile')}>
                        Изменить данные
                    </button>
                </div>
            ) : (
                <p className="user-profile__loading">Loading...</p>
            )}
        </div>
    );
}
