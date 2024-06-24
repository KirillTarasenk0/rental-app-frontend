import './UserProfile.scss';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

export const UserProfile = () => {
    const { userStatus, updateUser } = useAuth();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if (userStatus) {
            setUser(userStatus);
        }
    }, [userStatus]);
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
