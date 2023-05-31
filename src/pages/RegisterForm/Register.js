import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa';
import './Register.css';


const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      password
    };
    localStorage.setItem('userData', JSON.stringify(userData));
  };

  return (
    <div>
      <div className="Register">
        <form className='Register-form' onSubmit={handleSubmit}>
          <div className="Register__group">
            <h2>Sign Up</h2>
            <div className="Register__group">
              <input type="text" name="text" id="firstName" placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} />
              <input type="text" name="text" id="lastName" placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
              <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
            </div>
            <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="Register__group-btn">
            <input type="submit" value="Sign up" />
          </div>
          <p>OR Sign Up With</p>
          <div className="Register-icon">
            <button className='Facebook'>{<FaFacebookF/>}</button>
            <button className='Google'>{<FaGoogle/>}</button>
            <button className='Instagram'>{<FaInstagram/>}</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
