import './PropertyCard.scss';

export const PropertyCard = ({image, title, price, rooms, area, floor, city, address, description}) => {
    return (
      <>
        <div>
            <div>
                {image ? <img src={image} alt=""/> : <span>Изображение не зашружено</span>}
            </div>
            <div>
                <h3>{title}</h3>
                <p>{price}</p>
                <div>
                    <span>{rooms}</span>
                    <span>{area}</span>
                    <span>{floor}</span>
                </div>
                <div>
                    <span>{city}</span>
                    <span>{address}</span>
                </div>
                <p>{description}</p>
            </div>
        </div>
      </>
    );
}