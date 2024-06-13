import './RentSearchForm.scss';
import {Select, InputNumber} from 'antd';
import {realEstateOptions, roomsCountOptions, addressOptions} from "../../helpers/rentSearchFormOptions";
import {EnvironmentOutlined} from "@ant-design/icons";

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
          <div className="rent__search-container">
              <div className="search__inputs-container">
                  <Select
                      className="search__inputs-select"
                      showSearch
                      placeholder="Тип недвижимости"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={realEstateOptions}
                  />
                  <Select
                      className="search__inputs-select"
                      showSearch
                      placeholder="Кол-во комнат"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={roomsCountOptions}
                  />
                  <InputNumber
                      className="search__inputs-number"
                      placeholder="Цена от"
                      style={{
                          width: 200,
                      }}
                  />
                  <InputNumber
                      className="search__inputs-number"
                      placeholder="Цена до"
                      style={{
                          width: 200,
                      }}
                  />
                  <Select
                      className="search__inputs-select"
                      showSearch
                      placeholder="Укажите город поиска"
                      optionFilterProp="children"
                      onChange={onChange}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={addressOptions}
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
                      <button>Найти</button>
                  </div>
              </div>
          </div>
      </>
    );
}