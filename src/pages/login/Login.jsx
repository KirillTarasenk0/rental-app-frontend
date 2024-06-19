import './Login.scss';
import { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const {login} = useAuth();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', { email, password });
            login(response.data)
            navigate('/profile');
        } catch (error) {
            setMessage('Login failed. Check your input');
            console.error(error);
        }
    }
    return (
        <div className="login__container">
            <div className="login__form">
                <h2 className="login__title">Login</h2>
                {message && <p className="login__message">{message}</p>}
                <form onSubmit={handleLogin}>
                    <div className="login__field">
                        <label htmlFor="email" className="login__label">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="login__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="login__field">
                        <label htmlFor="password" className="login__label">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="login__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="register__login-link">
                        Ещё нету аккаунта? <Link to='/register'>Зарегистрируйтесь</Link>
                    </div>
                    <button type="submit" className="login__button">Login</button>
                </form>
            </div>
        </div>
    );
}
