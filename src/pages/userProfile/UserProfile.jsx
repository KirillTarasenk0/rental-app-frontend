import './UserProfile.scss';
import {useEffect, useState} from "react";
import axios from "axios";

export const UserProfile = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const getUser = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://127.0.0.1:8000/api/user', {}, {
                headers: {
                    'Authorization': `Bearer ${token},`
                },
            });
            setUser(response.data);
        };
        getUser();
    }, []);
    return (
      <>
        <div>
            <h1>User profile</h1>
            {user ? <p>Welcome, {user.name}!</p> : <p>Loading...</p>}
        </div>
      </>
    );
}