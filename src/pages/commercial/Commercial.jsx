import './Commercial.scss';
import {useGetCommercialPropertiesQuery} from "../../slices/propertiesTypeApi";
import {Link} from "react-router-dom";
import {PropertyCard} from "../../components/propertyCard/PropertyCard";

export const Commercial = () => {
    const { data: properties, error, isLoading } = useGetCommercialPropertiesQuery();
    return (
        <>
            <div className="all-properties">
                {isLoading && <div className="all-properties__loading">Loading...</div>}
                <div className="all-properties__list">
                    {properties && properties.data?.map(property => (
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
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}