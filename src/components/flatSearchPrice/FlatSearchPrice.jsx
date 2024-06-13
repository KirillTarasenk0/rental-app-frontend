import './FlatSearchPrice.scss';
import {Link} from "react-router-dom";

export const FlatSearchPrice = () => {
    return (
      <>
          <div className="flat__price-container">
              <h2>Цены</h2>
              <div>
                  <Link className="flat__price-link" to={''}>Дешёвые</Link>
              </div>
              <div>
                  <Link className="flat__price-link" to={''}>Седние</Link>
              </div>
              <div>
                  <Link className="flat__price-link" to={''}>Дорогие</Link>
              </div>
          </div>
      </>
    );
}