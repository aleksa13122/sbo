import "./Social.css";
import character from "../assets/burger-cheff.png";
import { useState, useEffect, useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Social() {
  const { t } = useContext(LanguageContext);
  const quotes = t("social.quotes");

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
  }, [quotes.length]);

  return (
    <div className="social-container-main">
      <h3 className="social-header">{t("social.heading")}</h3>

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
