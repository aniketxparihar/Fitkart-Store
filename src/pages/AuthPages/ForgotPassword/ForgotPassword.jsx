import React from 'react'
import "./ForgotPassword.css";

const ForgotPassword = () => {
  return (
    <div>
      <main>
        <div className="form__container">
          <heading className="heading">Forgot Password</heading>
          <form>
            <div className="email">
              <label htmlFor="email__input">Enter Email Address</label>
              <input
                type="text"
                id="email__input"
                className="email__input 2xl"
              />
            </div>
            <button className="send__password__button">Send My Password</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ForgotPassword