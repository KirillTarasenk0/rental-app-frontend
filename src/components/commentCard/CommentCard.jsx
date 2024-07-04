import React from 'react';
import './CommentCard.scss';

export const CommentCard = ({ user, rating, cleanliness, amenities, location, comment }) => {
    return (
        <div className="comment-card">
            <div className="comment-card__header">
                <img
                    className="comment-card__avatar"
                    src={user.avatar}
                    alt={`Avatar of ${user.name}`}
                />
                <div className="comment-card__user-info">
                    <h2 className="comment-card__user-name">{user.name}</h2>
                    <p className="comment-card__user-email">{user.email}</p>
                </div>
            </div>
            <div className="comment-card__body">
                <div className="comment-card__ratings">
                    <div className="comment-card__rating">
                        <span className="comment-card__label">Оценка:</span> {rating}
                    </div>
                    <div className="comment-card__cleanliness">
                        <span className="comment-card__label">Чистота:</span> {cleanliness}
                    </div>
                    <div className="comment-card__amenities">
                        <span className="comment-card__label">Удобства:</span> {amenities}
                    </div>
                    <div className="comment-card__location">
                        <span className="comment-card__label">Местоположение:</span> {location}
                    </div>
                </div>
                <div className="comment-card__comment">
                    <span className="comment-card__label">Комментарий:</span> {comment ? comment : 'Нет комментария'}
                </div>
            </div>
        </div>
    );
};
