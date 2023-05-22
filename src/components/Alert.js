import { useState } from "react";
import cross from "../assets/cross.svg";
import error from "../assets/error.svg";
import "../styles/Alert.css";

export default function Alert({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  function handleClick() {
    setIsVisible(false);
  }

  return (
    <div
      className={`alert ${isVisible ? "visible" : "hidden"}`}
      data-testid="alert"
    >
      <img className="alert__icon" src={error} alt="alert icon"></img>
      <div className="alert__content">{children}</div>
      <img
        className="alert__button"
        src={cross}
        alt="alert button"
        onClick={handleClick}
      ></img>
    </div>
  );
}
