import React, { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (!email) {
      alert("please enter email");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setIsValid(false);
      setTimeout(() => {
        setIsValid(true);
      }, 2000);
    } else {
      window.location.href = "https://app.loch.one/welcome.";

      setIsValid(true);

      setEmail("");
    }
  };
  return (
    <div className="signup-parent">
      <h2 style={{ color: "#B0B1B3" }}>
        Sign up for <br />
        exclusive access.
      </h2>
      <div className="mt-2 mb-4">
        <input
          type="text"
          placeholder="Your email address"
          className="form-input "
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        {!isValid && (
          <p style={{ color: "red" }}>Please enter a valid email address</p>
        )}

        <button className="darkk text-white cursor " onClick={handleSubmit}>
          Get started
        </button>
      </div>
      <span className="alert-text">
        You’ll receive an email with an invite link to join.
      </span>
    </div>
  );
};

export default Form;
