import './EditProfile.scss';
import { useEffect, useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";
import { useEditUserProfileMutation } from "../../../slices/userProfileApi";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
    const { userStatus, updateUser } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [avatar, setAvatar] = useState(null);
    const navigate = useNavigate();
    const [editUserProfile, { isLoading }] = useEditUserProfileMutation();

    useEffect(() => {
        if (userStatus) {
            setName(userStatus.name || '');
            setEmail(userStatus.email || '');
            setRole(userStatus.role || '');
            setAvatar(null); 
        }
    }, [userStatus]);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('role', role);
        if (avatar) formData.append('avatar', avatar);

        try {
            const result = await editUserProfile(formData).unwrap();
            if (result.error) {
                console.error('Failed to update profile:', result.error);
            } else {
                const updatedUser = { ...userStatus, name, email, role, avatar: result.avatar };
                updateUser(updatedUser);
                navigate('/settings/viewProfile');
            }
        } catch (error) {
            console.error('Failed to update profile:', error);
        }
    };

    return (
        <div className="user-profile">
            <h1 className="user-profile__title">Edit Profile</h1>
            {userStatus ? (
                <form className="user-profile__details" onSubmit={handleUpdate}>
                    <div className="user-profile__form-group">
                        <label className="user-profile__label">Name</label>
                        <input
                            type="text"
                            className="user-profile__input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="user-profile__form-group">
                        <label className="user-profile__label">Email</label>
                        <input
                            type="email"
                            className="user-profile__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="user-profile__form-group">
                        <label className="user-profile__label">Role</label>
                        <select
                            className="user-profile__input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        >
                            <option value="renter">Renter</option>
                            <option value="landlord">Landlord</option>
                        </select>
                    </div>
                    <div className="user-profile__form-group">
                        <label className="user-profile__label">Avatar</label>
                        <input
                            type="file"
                            className="user-profile__input"
                            onChange={(e) => setAvatar(e.target.files[0])}
                            accept="image/*"
                        />
                    </div>
                    <div className="user-profile__avatar">
                        <span className="user-profile__label">Current Avatar:</span>
                        {userStatus.avatar && !avatar && (
                            <img className="user-profile__image" src={userStatus.avatar} alt="User Avatar" />
                        )}
                        {avatar && (
                            <img className="user-profile__image" src={URL.createObjectURL(avatar)} alt="User Avatar" />
                        )}
                    </div>
                    <button className="user-profile__form-button" type="submit">
                        Update Profile
                    </button>
                </form>
            ) : (
                <p className="user-profile__loading">Loading...</p>
            )}
        </div>
    );
};
