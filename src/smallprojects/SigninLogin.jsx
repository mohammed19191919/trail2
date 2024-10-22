import React, { useState } from 'react';
import "./signin.css";

function SigninLogin() {
  const [isSignIn, setIsSignIn] = useState(true); 
  const [formData, setFormData] = useState({ password: '', name: '', email: '', fatherName: '' });
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault(); 
    setIsSignIn(true);
    resetForm();
  };

  const handleSignUp = (e) => {
    e.preventDefault(); 
    setIsSignIn(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({ password: '', name: '', email: '', fatherName: '' });
    setError('');
    setNameError('');
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));

    if (name === 'password') {
      validatePassword(value);
    } else if (name === 'name') {
      validateName(value);
    }
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const maxLength = 20;

    if (password.length < minLength) {
      setError(`Password must be at least ${minLength} characters long.`);
    } else if (password.length > maxLength) {
      setError(`Password must not exceed ${maxLength} characters.`);
    } else if (!/(?=.*[])(?=.*[!@#$%^&*])/.test(password)) {
      setError("Password must contain at least one special character and one number.");
    } else {
      setError('');
    }
  };

  const validateName = (name) => {
    const minLength = 2;
    const maxLength = 30;

    if (name.length < minLength) {
      setNameError("Your name must contain at least 2 characters.");
    } else if (name.length > maxLength) {
      setNameError("Please reduce the number of characters in your name.");
    } else if (/[^a-zA-Z]/.test(name)) {
      setNameError("Please use only letters in your name.");
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error && !nameError) {
      alert("Successfully submitted");
      resetForm(); 
    }
  };

  return (
    <div>
      <form className='Oneform' onSubmit={handleSubmit}> 
        {isSignIn ? (
          <div className="signin">
            <h2>Sign In</h2>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type='submit'>Submit</button>
            <div>
              <p>Don't have an account?</p> 
              <button type="button" onClick={handleSignUp}>Sign Up</button>
            </div>
          </div>
        ) : (
          <div className="signin">
            <h2>Sign Up</h2>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Your Name</label>
            </div>
            {nameError && <p style={{ color: "red" }}>{nameError}</p>}
            <div className="input-container">
              <input
                type="text"
                name="fatherName"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
              />
              <label htmlFor="fatherName">Father's Name</label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                placeholder=" " // Use a space to trigger the floating label effect
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type='submit'>Submit</button>
            <button type="button" onClick={handleSignIn}>Sign In</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default SigninLogin;