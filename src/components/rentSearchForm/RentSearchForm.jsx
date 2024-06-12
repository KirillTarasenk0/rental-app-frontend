import './RentSearchForm.scss';
import {Select, InputNumber} from 'antd';
import {realEstateOptions, roomsCountOptions, addressOptions} from "../../helpers/rentSearchFormOptions";

export const RentSearchForm = () => {
    const onChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
        console.log('search:', value);
    };
    const filterOption = (input, option) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    return (
      <>
          <Select
              showSearch
              placeholder="Тип недвижимости"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={realEstateOptions}
          />
          <Select
              showSearch
              placeholder="Кол-во комнат"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={roomsCountOptions}
          />
          <InputNumber
              placeholder="Цена от"
              style={{
                  width: 200,
              }}
          />
          <InputNumber
              placeholder="Цена до"
              style={{
                  width: 200,
              }}
          />
          <Select
              showSearch
              placeholder="Укажите город поиска"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={filterOption}
              options={addressOptions}
          />

      </>
    );
}