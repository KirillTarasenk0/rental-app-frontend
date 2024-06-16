import './RentSearchForm.scss';
import { Select, InputNumber } from 'antd';
import { realEstateOptions, roomsCountOptions, addressOptions } from "../../helpers/rentSearchFormOptions";
import { EnvironmentOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RentSearchForm = () => {
    const [propertyType, setPropertyType] = useState('');
    const [roomsCount, setRoomsCount] = useState(0);
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
    const [city, setCity] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        const formData = {
            property_type: propertyType,
            rooms: roomsCount,
            price_from: priceFrom,
            price_to: priceTo,
            city: city
        };
        navigate('/properties/searched', { state: formData });
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
        <>
            <div className="rent__search-container">
                <div className="search__inputs-container">
                    <Select
                        className="search__inputs-select"
                        showSearch
                        placeholder="Тип недвижимости"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        options={realEstateOptions}
                        onChange={setPropertyType}
                    />
                    <Select
                        className="search__inputs-select"
                        showSearch
                        placeholder="Кол-во комнат"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        options={roomsCountOptions}
                        onChange={setRoomsCount}
                    />
                    <InputNumber
                        className="search__inputs-number"
                        placeholder="Цена от"
                        style={{ width: 200 }}
                        onChange={setPriceFrom}
                    />
                    <InputNumber
                        className="search__inputs-number"
                        placeholder="Цена до"
                        style={{ width: 200 }}
                        onChange={setPriceTo}
                    />
                    <Select
                        className="search__inputs-select"
                        showSearch
                        placeholder="Укажите город поиска"
                        optionFilterProp="children"
                        filterOption={filterOption}
                        options={addressOptions}
                        onChange={setCity}
                    />
                </div>
                <div className="search__buttons-container">
                    <div className="header__enter-button">
                        <button>
                            <EnvironmentOutlined />
                            <span>На карте</span>
                        </button>
                    </div>
                    <div className="rent__find-button">
                        <button onClick={handleSearch}>Найти</button>
                    </div>
                </div>
            </div>
        </>
    );
}
