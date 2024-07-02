import { useState, useEffect } from 'react';
import './FavouriteProperties.scss';
import { Link } from "react-router-dom";
import { PropertyCard } from "../../components/propertyCard/PropertyCard";
import { useGetFavouritePropertyQuery } from "../../slices/userFavouriteProperyApi";

export const FavouriteProperties = () => {
    const { data: properties, error, isLoading } = useGetFavouritePropertyQuery();
    const [favouriteProperties, setFavouriteProperties] = useState([]);

    useEffect(() => {
        if (properties) {
            setFavouriteProperties(properties.data);
        }
    }, [properties]);

    const handleRemoveProperty = (id) => {
        setFavouriteProperties(prevProperties => prevProperties.filter(property => property.id !== id));
    };

    return (
        <>
            <div className="all-properties">
                {isLoading && <div className="all-properties__loading">Loading...</div>}
                <div className="all-properties__list">
                    {favouriteProperties && favouriteProperties.map(property => (
                        <Link to={`/property/${property.id}`} className="all-properties__link" key={property?.id}>
                            <PropertyCard
                                id={property?.id}
                                image={property?.property_images[0]?.image_path}
                                title={property?.title}
                                price={property?.price}
                                rooms={property?.rooms}
                                area={property?.area}
                                floor={property?.floor}
                                city={property?.city}
                                address={property?.address}
                                description={property?.description}
                                isFavouritePage={true}
                                onRemove={handleRemoveProperty} // Передаем функцию удаления
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};
