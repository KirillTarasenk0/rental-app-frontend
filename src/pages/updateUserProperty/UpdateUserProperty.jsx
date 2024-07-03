import './UpdateUserProperty.scss';
import {useParams} from "react-router-dom";
import {cities, propertyTypes} from "../../helpers/addAdvert";
import {useUpdateUserAddedPropertyMutation} from "../../slices/userAddedPropertiesApi";
import {useState} from "react";

export const UpdateUserProperty = () => {
    const { id } = useParams();
    const [updateUserAddedProperty, { isLoading }] = useUpdateUserAddedPropertyMutation();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [rooms, setRooms] = useState('');
    const [area, setArea] = useState('');
    const [floor, setFloor] = useState('');
    const [totalFloors, setTotalFloors] = useState('');
    const [furnished, setFurnished] = useState(false);
    const [parking, setParking] = useState(false);
    const [internet, setInternet] = useState(false);
    const [city, setCity] = useState('');
    const [image, setImage] = useState(null);
    console.log(id);
    const handleUpdateImage = (e) => {
        const imageFile = e.target.files[0];
        setImage(imageFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('id', id);
        if (title) formData.append('title', title);
        if (address) formData.append('address', address);
        if (price) formData.append('price', price);
        if (description) formData.append('description', description);
        if (propertyType) formData.append('property_type', propertyType);
        if (rooms) formData.append('rooms', rooms);
        if (area) formData.append('area', area);
        if (floor) formData.append('floor', floor);
        if (totalFloors) formData.append('total_floors', totalFloors);
        formData.append('furnished', furnished ? '1' : '0');
        formData.append('parking', parking ? '1' : '0');
        formData.append('internet', internet ? '1' : '0');
        if (city) formData.append('city', city);
        if (image) formData.append('image', image);

        try {
            const response = await updateUserAddedProperty(formData);
            console.log(response);
        } catch (error) {
            console.error('Error updating property:', error);
        }
    };

    return (
        <>
            <div className="add-advert">
                <h1 className="add-advert__title">Обновить объявление</h1>
                <form className="add-advert__form" onSubmit={handleSubmit}>
                    <input
                        className="add-advert__input"
                        type="text"
                        name="title"
                        placeholder="Заголовок"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <select
                        className="add-advert__input"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    >
                        <option value="">Выберите город</option>
                        {cities.map(city => (
                            <option key={city.value} value={city.value}>{city.label}</option>
                        ))}
                    </select>
                    <input
                        className="add-advert__input"
                        type="text"
                        name="address"
                        placeholder="Адрес"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <input
                        className="add-advert__input"
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <textarea
                        className="add-advert__input add-advert__textarea"
                        name="description"
                        placeholder="Описание"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        className="add-advert__input"
                        name="property_type"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                    >
                        <option value="">Выберите тип недвижимости</option>
                        {propertyTypes.map(type => (
                            <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                    </select>
                    <input
                        className="add-advert__input"
                        type="number"
                        name="rooms"
                        placeholder="Комнаты"
                        value={rooms}
                        onChange={(e) => setRooms(e.target.value)}
                    />
                    <input
                        className="add-advert__input"
                        type="number"
                        name="area"
                        placeholder="Площадь (кв.м)"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                    />
                    <input
                        className="add-advert__input"
                        type="number"
                        name="floor"
                        placeholder="Этаж"
                        value={floor}
                        onChange={(e) => setFloor(e.target.value)}
                    />
                    <input
                        className="add-advert__input"
                        type="number"
                        name="total_floors"
                        placeholder="Всего этажей"
                        value={totalFloors}
                        onChange={(e) => setTotalFloors(e.target.value)}
                    />
                    <label className="add-advert__label">
                        <input
                            className="add-advert__checkbox"
                            type="checkbox"
                            name="furnished"
                            checked={furnished}
                            onChange={(e) => setFurnished(e.target.checked)}
                        />
                        Меблированная
                    </label>
                    <label className="add-advert__label">
                        <input
                            className="add-advert__checkbox"
                            type="checkbox"
                            name="parking"
                            checked={parking}
                            onChange={(e) => setParking(e.target.checked)}
                        />
                        Парковка
                    </label>
                    <label className="add-advert__label">
                        <input
                            className="add-advert__checkbox"
                            type="checkbox"
                            name="internet"
                            checked={internet}
                            onChange={(e) => setInternet(e.target.checked)}
                        />
                        Интернет
                    </label>
                    <input
                        className="add-advert__input"
                        type="file"
                        name="image"
                        onChange={handleUpdateImage}
                    />
                    <button className="add-advert__submit" type="submit">Отправить</button>
                </form>
            </div>
        </>
    );
}
