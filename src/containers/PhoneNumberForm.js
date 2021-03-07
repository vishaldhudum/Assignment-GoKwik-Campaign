import React from 'react'
import Images from '../constants/Images'
import '../assets/css/phoneNumberForm.css'

const PhoneNumberForm = props => {
  return (
    <div className="card-content ">
      <p className="message">You have WON Paytm Gift Card of Rs 200 for
        <span>placing the order on Man Matters</span>
      </p>
      <div className="number-form fs30">
        <input
          onChange={props.handleChange}
          value={props.phoneNumber}
          className={props.error ? 'error' : ''}
          placeholder="Enter Mobile Number"
        />
        {
          props.error
            ? <p className="helper-text error-msg">Please enter a valid mobile number</p>
            : <p className="helper-text">Enter the same number used on man matters</p>
        }
        <button
          disabled={!props.validated}
          className="submit-btn"
          onClick={props.handleSubmit}
        >
          Wow! Get my paytm gift card<img src={Images.next} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PhoneNumberForm