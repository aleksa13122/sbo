import "./Hero.css";
import burgerImage from "../assets/hero-burger.png";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <h1 className="hero__title" aria-label="Serious Burgers Only">
        <span>SERIOUS</span>
        <span>BURGERS</span>
        <span>ONLY</span>
      </h1>

      <img
        className="hero__burger"
        src={burgerImage}
        alt="Burger"
        decoding="async"
        loading="eager"
      />
    </section>
  );
}
