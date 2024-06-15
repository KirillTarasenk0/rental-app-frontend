import './FlatSearchPrice.scss';
import {Link} from "react-router-dom";

export const FlatSearchPrice = () => {
    return (
      <>
          <div className="flat__price-container">
              <h2>Цены</h2>
              <div>
                  <Link className="flat__price-link" to='/cheep'>Дешёвые</Link>
              </div>
              <div>
                  <Link className="flat__price-link" to='/medium'>Седние</Link>
              </div>
              <div>
                  <Link className="flat__price-link" to='/expensive'>Дорогие</Link>
              </div>
          </div>
      </>
    );
}