import './Home.scss';
import {RentSearchForm} from "../../components/rentSearchForm/RentSearchForm";
import {RentSearchCheckboxes} from "../../components/rentSearchCheckboxes/RentSearchCheckboxes";
import {FlatSaleLinks} from "../../components/flatSaleLinks/FlatSaleLinks";
import {FlatSearchPrice} from "../../components/flatSearchPrice/FlatSearchPrice";
import {RentTypeLinks} from "../../components/rentTypeLinks/RentTypeLinks";
import {useState} from "react";

export const Home = () => {
    const [furnished, setFurnished] = useState(false);
    const [parking, setParking] = useState(false);
    const [internet, setInternet] = useState(false);
    const handleFurnished = () => {
          setFurnished(!furnished);
    };
    const handleParking = () => {
        setParking(!parking);
    };
    const handleInternet = () => {
        setInternet(!internet);
    }
    return (
      <>
        <section className="home__section">
            <div className="home__container">
                <h1 className="home__container-title">Живите, где хочется</h1>
                <RentSearchForm
                    furnished={furnished}
                    parking={parking}
                    internet={internet}
                />
                <div className="search__parameters-container">
                    <RentSearchCheckboxes
                        handleFurnished={handleFurnished}
                        handleParking={handleParking}
                        handleInternet={handleInternet}
                    />
                    <FlatSaleLinks/>
                    <FlatSearchPrice/>
                    <RentTypeLinks/>
                </div>
            </div>
        </section>
      </>
    );
}