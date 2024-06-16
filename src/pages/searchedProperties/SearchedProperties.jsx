import './SearchedProperties.scss';
import {Link, useLocation} from "react-router-dom";
import {useGetSearchedPropertiesQuery} from "../../slices/propertiesSearchApi";
import {PropertyCard} from "../../components/propertyCard/PropertyCard";

export const SearchedProperties = () => {
    const location = useLocation();
    const formData = location.state;
    const { data: properties, error, isLoading } = useGetSearchedPropertiesQuery(formData);
    console.log(formData);
    console.log(formData.property_type, formData.rooms, formData.price_from, formData.price_to, formData.city);
    console.log(properties);
    return (
        <>
            <div className="all-properties">
                {isLoading && <div className="all-properties__loading">Loading...</div>}
                <div className="all-properties__list">
                    {properties && properties.data?.map(property => (
                        <Link to={`/property/${property.id}`} className="all-properties__link" key={property?.id}>
                            <PropertyCard
                                image={property?.property_images[0]?.image_path}
                                title={property?.title}
                                price={property?.price}
                                rooms={property?.rooms}
                                area={property?.area}
                                floor={property?.floor}
                                city={property?.city}
                                address={property?.address}
                                description={property?.description}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}