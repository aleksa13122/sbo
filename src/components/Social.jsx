import "./Social.css";
import character from "../assets/burger-cheff.png";
import { useState, useEffect } from "react";

export default function Social() {
  const quotes = [
    {
      text: "Juicy, messy, absolutely worth it.",
      author: "-Person who lives for burgers",
    },
    { text: "Serious flavour, no shortcuts taken.", author: "-Burger chef" },
    { text: "Best burger stop on my trip.", author: "-Travel food influencer" },
    { text: "You can taste the quality instantly.", author: "-Local foodie" },
    {
      text: "Simple ingredients, insanely good result.",
      author: "-Person who knows burgers",
    },
    {
      text: "I came once. I keep coming back.",
      author: "-Regular who loves burgers",
    },
  ];

  const INTERVAL = 5000;
  const DURATION = 350;

  const [index, setIndex] = useState(0);
  const [state, setState] = useState("show");
  const [wave, setWave] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setState("hide");

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % quotes.length);
        setState("show");
      }, DURATION);
    }, INTERVAL);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="social-container-main">
      <h3 className="social-header">PEOPLE SAY...</h3>

      <div className="social-divs">
        <div className={`social-text ${state}`}>
          {quotes[index].text}
          <p className="social-name">{quotes[index].author}</p>
        </div>

        <img
          className={`social-img ${wave ? "chef-pop" : ""}`}
          src={character}
          alt="Burger chef"
          onClick={() => {
            setWave(true);
            setTimeout(() => setWave(false), 700);
          }}
        />
      </div>
    </div>
  );
}
