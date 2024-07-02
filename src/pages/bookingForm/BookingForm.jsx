import './BookingForm.scss';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBookPropertyMutation } from "../../slices/propertiesBookApi";

export const BookingForm = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [status, setStatus] = useState('');
    const [bookProperty, { isLoading, isError }] = useBookPropertyMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('property_id', id);
        formData.append('name', name);
        formData.append('phone', phone);
        formData.append('email', email);
        formData.append('comment', comment);

        try {
            await bookProperty(formData).unwrap();
            setStatus('success');
        } catch (error) {
            console.error('Error booking property:', error);
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="phone">Phone</label>
                    <input
                        className="booking-form__input"
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="email">Email</label>
                    <input
                        className="booking-form__input"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="booking-form__group">
                    <label className="booking-form__label" htmlFor="comment">Comment</label>
                    <textarea
                        className="booking-form__textarea"
                        id="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </div>
                <button className="booking-form__button" type="submit" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>
                {status === 'success' && <p className="booking-form__success">Booking successful!</p>}
                {status === 'error' && <p className="booking-form__error">Booking failed. Please try again.</p>}
            </form>
        </div>
    );
};
