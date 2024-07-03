import React, { useState } from 'react';
import './AddComments.scss';

export const AddComments = () => {
    const [rating, setRating] = useState('');
    const [cleanliness, setCleanliness] = useState('');
    const [amenities, setAmenities] = useState('');
    const [location, setLocation] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('rating', rating);
        formData.append('cleanliness', cleanliness);
        formData.append('amenities', amenities);
        formData.append('location', location);
        formData.append('comment', comment);

        try {

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="add-comments">
            <h1 className="add-comments__title">Добавить комментарий</h1>
            <form className="add-comments__form" onSubmit={handleSubmit}>
                <input
                    className="add-comments__input"
                    type="number"
                    name="rating"
                    placeholder="Оценка (от 1 до 10)"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
                <input
                    className="add-comments__input"
                    type="number"
                    name="cleanliness"
                    placeholder="Чистота (от 1 до 10)"
                    value={cleanliness}
                    onChange={(e) => setCleanliness(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
                <input
                    className="add-comments__input"
                    type="number"
                    name="amenities"
                    placeholder="Удобства (от 1 до 10)"
                    value={amenities}
                    onChange={(e) => setAmenities(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
                <input
                    className="add-comments__input"
                    type="number"
                    name="location"
                    placeholder="Местоположение (от 1 до 10)"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    min="1"
                    max="10"
                    required
                />
                <textarea
                    className="add-comments__input add-comments__textarea"
                    name="comment"
                    placeholder="Комментарий"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="add-comments__submit" type="submit">Отправить</button>
            </form>
        </div>
    );
};
