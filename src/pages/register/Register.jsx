import './Register.scss';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'; // Импортируем компонент Link для роутинга
import axios from "axios";
import {useAuth} from "../../contexts/AuthContext";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const {login} = useAuth();
    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            login(response.data);
            navigate('/profile');
            setMessage('Registration successful. You can now log in');
        } catch (error) {
            setMessage('Registration failed. Check your input');
            console.error(error);
        }
    };
    return (
        <>
            <div className="register__container">
                <form className="register__form" onSubmit={register}>
                    <h2 className="register__title">Register</h2>
                    {message && <p className="register__message">{message}</p>}
                    <div className="register__field">
                        <label className="register__label">Name</label>
                        <input
                            type="text"
                            className="register__input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register__field">
                        <label className="register__label">Email</label>
                        <input
                            type="email"
                            className="register__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register__field">
                        <label className="register__label">Password</label>
                        <input
                            type="password"
                            className="register__input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register__field">
                        <label className="register__label">Confirm Password</label>
                        <input
                            type="password"
                            className="register__input"
                            value={passwordConfirmation}
                            onChange={(e) => setPasswordConfirmation(e.target.value)}
                            required
                        />
                    </div>
                    <div className="register__login-link">
                        Уже есть аккаунт? <Link to='/login'>Залогиньтесь</Link>
                    </div>
                    <button className="register__button" type="submit">Register</button>
                </form>
            </div>
        </>
    );
};
