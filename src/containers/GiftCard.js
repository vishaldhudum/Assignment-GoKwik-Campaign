import Images from '../constants/Images'

import '../assets/css/giftCard.css'

const GiftCard = () => {
  return (
    <div className="gift-card">
      <div className="text-center">
        <img src={Images.paytm} alt="" />
      </div>
      <div className="gift-worth">
        <div className="gift">
          <img src={Images.giftCard} />
        </div>
        <div className="amount">
          <span><span className="rupee">₹</span>200</span>
        </div>
      </div>
    </div>
  );
}

export default GiftCard