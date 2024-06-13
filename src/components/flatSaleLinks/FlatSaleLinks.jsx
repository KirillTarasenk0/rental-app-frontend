import './FlatSaleLinks.scss';
import {Link} from "react-router-dom";

export const FlatSaleLinks = () => {
    return (
      <>
          <div className="flat__links-container">
              <h2>Продажа</h2>
              <div>
                  <Link className="flat__link" to={''}>1-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>2-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>3-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>4-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>5-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>6-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to={''}>Больше комнат</Link>
              </div>
          </div>
      </>
    );
}