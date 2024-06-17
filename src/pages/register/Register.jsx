import { useState } from 'react';
import { useRegisterUserMutation} from "../../slices/userAuthApi";
import './Register.scss';
import axios from "axios";

export const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [message, setMessage] = useState('');
    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/register', {
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
            });
            setMessage('Registration successful. You can now log in');
        } catch (error) {
            setMessage('Registration failed. Check your input');
        }
    };
    return (
      <>
        <div>
            <h2>Register</h2>
            <form onSubmit={register}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e) =>
                        setName(e.target.value)}
                    />
                </div>
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
                <div>
                    <label>Confirm Password</label>
                    <input type="password" value={passwordConfirmation} onChange={(e) =>
                        setPasswordConfirmation(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
      </>
    );
};