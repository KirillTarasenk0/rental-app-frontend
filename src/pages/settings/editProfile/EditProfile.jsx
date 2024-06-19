import './EditProfile.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../contexts/AuthContext";

export const EditProfile = () => {
    const { userStatus } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        if (userStatus) {
            setName(userStatus.name);
            setEmail(userStatus.email);
            setRole(userStatus.role);
            setAvatar(userStatus.avatar);
        }
    }, [userStatus]);

    /*const handleUpdate = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('role', role);
            formData.append('avatar', avatar); // Assuming avatar is a File object

            await axios.put('http://127.0.0.1:8000/api/user', formData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate('/profile');
        } catch (error) {
            console.error(error);
        }
    };*/

    return (
        <div className="user-profile">
            <h1 className="user-profile__title">Edit Profile</h1>
            {userStatus ? (
                <form className="user-profile__details"> {/*onSubmit={handleUpdate}*/}
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
                        <input
                            type="text"
                            className="user-profile__input"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                    </div>
                    <div className="user-profile__form-group">
                        <label className="user-profile__label">Avatar</label>
                        <input
                            type="file" // Change input type to file
                            className="user-profile__input"
                            onChange={(e) => setAvatar(e.target.files[0])} // Capture the selected file
                            accept="image/*" // Allow only image files to be selected
                        />
                    </div>
                    <div className="user-profile__avatar">
                        <span className="user-profile__label">Current Avatar:</span>
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
