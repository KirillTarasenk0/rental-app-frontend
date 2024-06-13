import './FlatSaleLinks.scss';
import {Link} from "react-router-dom";

export const FlatSaleLinks = () => {
    return (
      <>
          <div>
              <div>
                  <Link to={''}>1-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>2-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>3-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>4-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>5-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>6-комнатные квартиры</Link>
              </div>
              <div>
                  <Link to={''}>Больше комнат</Link>
              </div>
          </div>
      </>
    );
}