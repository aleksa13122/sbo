// Brand.jsx
import "./Brand.css";
import character from "../assets/burger-cheering-coloured.png";

export default function Brand() {
  return (
    <section className="brand">
      <div className="brand__inner">
        <img className="brand-img" src={character} />
        <div className="brand-row-second">
          <h4 className="brand__title">SERIOUS BURGERS. NO JOKES.</h4>
          <p className="brand__text">
            Here at Serious Burgers Only, we take burgers seriously — no jokes,
            no shortcuts, no compromises. We stack juicy patties, melty cheese,
            and bold ingredients into every build, making food that’s loud in
            flavor and impossible to ignore. It’s fun, it’s messy, and it’s made
            to keep you coming back for more!
          </p>
        </div>
      </div>
    </section>
  );
}
