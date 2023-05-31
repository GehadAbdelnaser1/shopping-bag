import React from 'react';
import { FaFacebookF,FaGoogle,FaInstagram   } from 'react-icons/fa';
import './login.css';
import Nav from '../../component/nav/nav.js';
import Footer from '../../component/footer/footer.js';

const Login = () => {
  return (
    <div>
      <Nav/>
    <div className="login">
          <form className='login-form'>
            <div className="form__group">
            <h2>Login</h2>
            <div className="form__group">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" name="email" id="email" placeholder='Email' />
              </div>
              
                {/* <label htmlFor="password">Password</label> */}
                <input type="password" name="password" id="password" placeholder='Password' />
                </div>
                <div className="form__group-btn">
                  <input type="submit" value="Login" />
                  </div>
                  <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                  <div className="form-icon">
                    <button className='Facebook'>{<FaFacebookF/>}</button>
                    <button className='Google'>{<FaGoogle/>}</button>
                    <button className='Instagram'>{<FaInstagram/>}</button>
                  </div>
          
          </form>
    </div>
      
      

      <Footer/>
    </div>
  );
}

export default Login;

