import './RoomsProperties.scss';
import {useGetRoomsPropertiesQuery} from "../../slices/propertyRoomsApi";
import {Link, useParams} from "react-router-dom";
import {PropertyCard} from "../../components/propertyCard/PropertyCard";

export const RoomsProperties = () => {
    const {roomNumber} = useParams();
    const { data: properties, error, isLoading } = useGetRoomsPropertiesQuery(roomNumber);
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