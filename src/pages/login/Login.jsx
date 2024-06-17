import './Login.scss';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', {email, password});
            localStorage.setItem('token', response.data.token);
            navigate('/profile');
        } catch (error) {
            setMessage('Login failed. Check your input');
            console.error(error);
        }
    }
    return (
      <>
        <div>
            <h2>Login</h2>
            <form onSubmit={login}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) =>
                        setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) =>
                        setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
      </>
    );
}