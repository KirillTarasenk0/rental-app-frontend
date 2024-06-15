import './RentTypeLinks.scss';
import {Link} from "react-router-dom";

export const RentTypeLinks = () => {
    return (
      <>
          <div>
              <div className="rent__type-container">
                  <h2>Типы жилья</h2>
                  <div>
                      <Link className="rent__type-link" to='/allProperties'>Все</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to='/flats'>Квартиры</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to='/houses'>Дома</Link>
                  </div>
                  <div>
                      <Link className="rent__type-link" to='/commercial'>Коммерческие</Link>
                  </div>
              </div>
          </div>
      </>
    );
}