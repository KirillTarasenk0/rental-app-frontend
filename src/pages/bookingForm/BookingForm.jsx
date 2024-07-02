import './BookingForm.scss';
import { useState } from 'react';
import {useParams} from "react-router-dom";

export const BookingForm = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        property_id: id,
        name: '',
        phone: '',
        email: '',
        comment: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Simulating successful form submission
            setStatus('success');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="booking-form">
            <h1 className="booking-form__title">Book Property</h1>
            <form className="booking-form__form" onSubmit={handleSubmit}>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="name">Name</label>
                    <input
                        className="booking-form__input"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="phone">Phone</label>
                    <input
                        className="booking-form__input"
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="email">Email</label>
                    <input
                        className="booking-form__input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="comment">Comment</label>
                    <textarea
                        className="booking-form__textarea"
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                    />
                </div>
                <button className="booking-form__button" type="submit">Submit</button>
                {status === 'success' && <p className="booking-form__success">Booking successful!</p>}
                {status === 'error' && <p className="booking-form__error">Booking failed. Please try again.</p>}
            </form>
        </div>
    );
}
