import './AllProperties.scss';
import {useGetAllPropertiesQuery} from "../../slices/propertiesTypeApi";
import {PropertyCard} from "../../components/propertyCard/PropertyCard";

export const AllProperties = () => {
    const {data: properties, error, isLoading} = useGetAllPropertiesQuery();
    console.log(properties);
    return (
      <>
        <div>
            {properties && properties.data?.map(property => (
                <PropertyCard
                    key={property?.id}
                    image={property?.property_images}
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
      </>
    );
}