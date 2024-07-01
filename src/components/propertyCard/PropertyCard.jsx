import React from 'react';
import './PropertyCard.scss';
import { useAddFavouritePropertyMutation } from "../../slices/userFavouriteProperyApi";

export const PropertyCard = ({ id, image, title, price, rooms, area, floor, city, address, description }) => {
    const [addFavouriteProperty, { isLoading }] = useAddFavouritePropertyMutation();

    const handleAddToFavorites = async (e) => {
        e.preventDefault();
        try {
            const result = await addFavouriteProperty({ id });
        } catch (error) {
            console.error(error);
        }
    };

    const handleBookProperty = () => {
        console.log('Забронировано' + id);
    };

    return (
        <div className="property-card">
            <div className="property-card__image-container">
                {image ? <img src={image} alt="Property" className="property-card__image-container__image" /> : <span className="property-card__image-container__no-image">Изображение не загружено</span>}
            </div>
            <div className="property-card__content">
                <h3 className="property-card__content__title">{title}</h3>
                <p className="property-card__content__price">{price} ₽</p>
                <div className="property-card__content__details">
                    <span>{rooms} комн.</span>
                    <span>{area} кв.м.</span>
                    <span>Этаж: {floor}</span>
                </div>
                <div className="property-card__content__location">
                    <span>{city}</span>
                    <span>{address}</span>
                </div>
                <p className="property-card__content__description">{description}</p>
                <div className="property-card__content__actions">
                    <button className="property-card__button property-card__button--favorite" onClick={handleAddToFavorites}>
                        Добавить в избранное
                    </button>
                    <button className="property-card__button property-card__button--book" onClick={handleBookProperty}>
                        Забронировать
                    </button>
                </div>
            </div>
        </div>
    );
};
