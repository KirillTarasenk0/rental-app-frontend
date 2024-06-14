import './RentTypeLinks.scss';
import {Link} from "react-router-dom";

export const RentTypeLinks = () => {
    return (
      <>
          <div>
              <div className="rent__type-container">
                  <h2>Типы жилья</h2>
                  <div>
                      <Link className="rent__type-link" to={''}>Все</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to={''}>Квартиры</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to={''}>Дома</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to={''}>Коммерческие</Link>
                  </div>
              </div>
          </div>
      </>
    );
}