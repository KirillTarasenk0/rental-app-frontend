import './Home.scss';
import {RentSearchForm} from "../../components/rentSearchForm/RentSearchForm";
import {RentSearchCheckboxes} from "../../components/rentSearchCheckboxes/RentSearchCheckboxes";
import {FlatSaleLinks} from "../../components/flatSaleLinks/FlatSaleLinks";
import {FlatSearchPrice} from "../../components/flatSearchPrice/FlatSearchPrice";

export const Home = () => {
    return (
      <>
        <section className="home__section">
            <div className="home__container">
                <h1 className="home__container-title">Живите, где хочется</h1>
                <RentSearchForm/>
                <div className="search__parameters-container">
                    <RentSearchCheckboxes/>
                    <FlatSaleLinks/>
                    <FlatSearchPrice/>
                </div>
            </div>
        </section>
      </>
    );
}