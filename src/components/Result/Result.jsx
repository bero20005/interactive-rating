import "./Result.css";
import illustration from "/images/illustration-thank-you.svg"


export default function Result({ rate }) {
  return <div className="result-container">
  <img src={illustration} alt="svg-illustration" className="illustration"></img>
    <p className="answer">You selected {rate} out of 5</p>
    <h1 className="title">Thank you!</h1>
    <p className="description">
    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
    </p>
  </div>

}
