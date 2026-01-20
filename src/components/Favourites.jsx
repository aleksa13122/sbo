import "../components/Favourites.css";
import Marquee from "./Marquee";
import cheesy from "../../src/assets/burger-cheesy.jpg";
import maximus from "../../src/assets/burger-maximus.png";
import shorty from "../../src/assets/burger-shorty.png";

export default function Favourites() {
  return (
    <div>
      <Marquee></Marquee>
      <div className="favourites-container-main">
        <div className="favourites-card">
          <img src={cheesy} alt="Cheesy burger" className="favourites-img" />
          <div className="favourites-header">CHEESY CRAVE</div>
          <div className="favourites-desc">
            Melted cheddar dripping over a juicy patty, toasted bun, and just
            enough crunch to keep things serious and satisfying.
          </div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="favourites-card">
          <img src={maximus} alt="Maximus burger" className="favourites-img" />
          <div className="favourites-header">MAXIMUS</div>
          <div className="favourites-desc">
            A towering stack loaded with crispy bacon, crunchy nachos, melted
            cheese, and bold sauces built for real hunger.
          </div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="favourites-card">
          <img src={shorty} alt="shorty burger" className="favourites-img" />
          <div className="favourites-header">SHORTY</div>
          <div className="favourites-desc">
            Compact, juicy, and full of flavor — a small burger made for quick
            bites without cutting corners on taste.
          </div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
