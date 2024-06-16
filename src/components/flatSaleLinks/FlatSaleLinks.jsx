import './FlatSaleLinks.scss';
import {Link} from "react-router-dom";

export const FlatSaleLinks = () => {
    return (
      <>
          <div className="flat__links-container">
              <h2>Продажа</h2>
              <div>
                  <Link className="flat__link" to='/rooms/1'>1-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/2'>2-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/3'>3-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/4'>4-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/5'>5-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/6'>6-комнатные квартиры</Link>
              </div>
              <div>
                  <Link className="flat__link" to='/rooms/more'>Больше комнат</Link>
              </div>
          </div>
      </>
    );
}