import "./Social.css";
import character from "../assets/burger-cheff.png";
import { useState, useEffect } from "react";

export default function Brand() {
  const [index, setIndex] = useState(0);
  const quotes = [
    { text: "Very good burgers!", author: "-Person who knows burgers" },
    { text: "Very good burgers1", author: "-Person who knows burgers1" },
    { text: "Very good burgers2", author: "-Person who knows burgers2" },
    { text: "Very good burgers3", author: "-Person who knows burgers3" },
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="social-container-main">
      <h3 className="social-header">PEOPLE SAY...</h3>
      <div className="social-divs">
        <div className="social-text">
          {quotes[index].text}
          <p className="social-name">{quotes[index].author}</p>
        </div>
        <img className="social-img" src={character} />
      </div>
    </div>
  );
}
