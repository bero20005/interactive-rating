import "./Rate.css";
import { useState } from "react";
import Star from "/images/icon-star.svg"

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];

  console.log(rate);
  return (
    <div className="rate-container">
        <img src={Star} alt="icon-star" className="star" />
      <h1 className="title">How did we do?</h1>
      <p className="description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="buttons-container">
        {buttons.map((button, index) => (
          <button
            className="rate"
            onClick={() => setRate(button)}
            key={index}
            style={rate == button ? { backgroundColor: "#fb7b19" } : {}}
          >
            {button}
          </button>
        ))}
      </div>

      <button
        className="submit"
        onClick={() => {
          rate && setSubmit(true);
        }}
      >
        Submit
      </button>
    </div>
  );
}
