import './AllProperties.scss';
import {useGetAllPropertiesQuery} from "../../slices/propertiesTypeApi";
import {PropertyCard} from "../../components/propertyCard/PropertyCard";

export const AllProperties = () => {
    const {data: properties, error, isLoading} = useGetAllPropertiesQuery();
    console.log(properties);
    return (
        <div className="all-properties">
            {isLoading && <div className="all-properties__loading">Loading...</div>}
            <div className="all-properties__list">
                {properties && properties.data?.map(property => (
                    <PropertyCard
                        key={property?.id}
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
                ))}
            </div>
        </div>
    );
}
