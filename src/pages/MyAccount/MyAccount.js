import React from 'react';
import Nav from '../../component/nav/nav.js';
import Footer from '../../component/footer/footer.js';
import pay1 from '../../images/PAY1.png';
import pay2 from '../../images/pay2.png';

// import { FaCcAmazonPay, FaCcMastercard } from "react-icons/fa";
import './MyAccount.css';

const MyAccount = () => {
  return (
    <div>
    <Nav/>
  <div className="pay">
        <form className='pay-form'>
          <div className="pay-form__group">
          <h2>Payment</h2>
          <div className="pay-form__group">

            <input type="email" name="email" id="email" placeholder='Email' />
            </div>
              <input type="password" name="password" id="password" placeholder='Password' />
            
              <input type="password" name="password" id="password" placeholder='Card number  XX/YY/XXX'/>
      
              </div>
              <div className="cvv">
                <input type="number" placeholder='ExYear' />
                <input type="number" placeholder='CVV'/>
              </div>
              <div className="pay-form__group-btn">
                <input type="submit" value="Pay Now" />
                </div>
                {/* <p>Don't have an account? <a href="/signup">Pay Naw</a></p> */}
                <div className="pay-form-icon">
                  {/* <button className='AmazonPay'>{<FaCcMastercard/>}</button>
                  
                  <button className='Mastercard'>{<FaCcAmazonPay/>}</button> */}
                  {/* <button className='Instagram'>{<MdOutlinePayment />}</button> */}
                  <img src={pay1} alt="" />
                  <img src={pay2} alt="" />
                  
                </div>
              
        
        </form>
  </div>
    
    

    <Footer/>
  </div>
  );
}

export default MyAccount;
