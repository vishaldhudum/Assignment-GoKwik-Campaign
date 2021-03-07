import Images from '../constants/Images'
import GiftCard from './GiftCard'

import '../assets/css/layout.css'

const Layout = props => {
  return (
    <div className="promotions-banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="campaign-header">
              <img src={Images.manMatters} />
              <div className="heading">
                <span className="heading-text">Congratulations</span>
                <span className='emoji' onClick={props.clearStorage}>🥳</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 d-flex justify-content-center">
            <div className="card-wrap">
              <GiftCard />
              {props.children}
              <div>
                <p className="powered">
                  Powered by <img src={Images.smallLogo} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;