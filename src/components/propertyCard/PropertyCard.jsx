import './PropertyCard.scss';

export const PropertyCard = ({ image, title, price, rooms, area, floor, city, address, description }) => {
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
            </div>
        </div>
    );
}
