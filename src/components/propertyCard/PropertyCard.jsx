import './PropertyCard.scss';
import { useAddFavouritePropertyMutation, useDeleteFavouritePropertyMutation } from "../../slices/userFavouriteProperyApi";
import { useAuth } from '../../contexts/AuthContext';
import {Link} from "react-router-dom";

export const PropertyCard = ({ id, image, title, price, rooms, area, floor, city, address, description, isFavouritePage, onRemove }) => {
    const { userStatus } = useAuth();
    const [addFavouriteProperty, { isLoading: isAdding }] = useAddFavouritePropertyMutation();
    const [deleteFavouriteProperty, { isLoading: isDeleting }] = useDeleteFavouritePropertyMutation();

    const handleAddToFavorites = async (e) => {
        e.preventDefault();
        try {
            await addFavouriteProperty({ id });
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteFromFavorites = async (e) => {
        e.preventDefault();
        try {
            await deleteFavouriteProperty({ id });
            if (onRemove) {
                onRemove(id);
            }
        } catch (error) {
            console.error(error);
        }
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
                    {userStatus && (
                        <>
                            {isFavouritePage ? (
                                <button
                                    className="property-card__button property-card__button--remove-favorite"
                                    onClick={handleDeleteFromFavorites}
                                    disabled={isDeleting}
                                >
                                    Удалить из избранного
                                </button>
                            ) : (
                                <button
                                    className="property-card__button property-card__button--favorite"
                                    onClick={handleAddToFavorites}
                                    disabled={isAdding}
                                >
                                    Добавить в избранное
                                </button>
                            )}
                        </>
                    )}
                    <button className="property-card__button property-card__button--book" >
                        <Link className="book__link" to={`/bookProperty/${id}`}>
                            Забронировать
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
