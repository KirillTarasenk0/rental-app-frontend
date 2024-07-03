import './PropertyDetail.scss';
import { useParams } from "react-router-dom";
import { useGetPropertyDetailsQuery } from "../../slices/propertyDetailsApi";
import {AddComments} from "../../components/addComments/AddComments";
import {CommentCard} from "../../components/commentCard/CommentCard";

export const PropertyDetail = () => {
    const { id } = useParams();
    const { data: property, error, isLoading } = useGetPropertyDetailsQuery(id);
    if (isLoading) return <div className="property-detail__loading">Loading...</div>;
    if (error) return <div className="property-detail__error">Error loading property details</div>;
    const details = property?.data[0];
    return (
        <>
            <div className="property-detail__container">
                <div className="property-detail">
                    <h1 className="property-detail__title">{details?.title}</h1>
                    <div className="property-detail__image-container">
                        {details?.property_images && details.property_images[0]?.image_path ? (
                            <img
                                src={details.property_images[0].image_path}
                                alt={details.title}
                                className="property-detail__image"
                            />
                        ) : (
                            <span className="property-detail__no-image">No image available</span>
                        )}
                    </div>
                    <div className="property-detail__info">
                        <p className="property-detail__price">Price: {details?.price} ₽</p>
                        <p className="property-detail__address">Address: {details?.address}</p>
                        <p className="property-detail__city">City: {details?.city}</p>
                        <p className="property-detail__area">Area: {details?.area} sq.m</p>
                        <p className="property-detail__rooms">Rooms: {details?.rooms}</p>
                        <p className="property-detail__floor">Floor: {details?.floor} / {details?.total_floors}</p>
                        <p className="property-detail__type">Property Type: {details?.property_type}</p>
                        <p className="property-detail__furnished">Furnished: {details?.furnished ? 'Yes' : 'No'}</p>
                        <p className="property-detail__internet">Internet: {details?.internet ? 'Yes' : 'No'}</p>
                        <p className="property-detail__parking">Parking: {details?.parking ? 'Yes' : 'No'}</p>
                        <p className="property-detail__description">{details?.description}</p>
                    </div>
                    <h4>Комментарии</h4>
                    <CommentCard
                        user={'Kirill'}
                        rating={10}
                        cleanliness={10}
                        amenities={10}
                        location={10}
                        comment={'Goof'}
                    />
                    <AddComments/>
                </div>
            </div>
        </>
    );
}
