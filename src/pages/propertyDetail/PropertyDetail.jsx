import './PropertyDetail.scss';
import {useParams} from "react-router-dom";
import {useGetPropertyDetailsQuery} from "../../slices/propertyDetailsApi";

export const PropertyDetail = () => {
    const {id} = useParams();
    const { data: property, error, isLoading } = useGetPropertyDetailsQuery(id);
    console.log(property);
    return (
      <>
        <h1>Detail</h1>
      </>
    );
}