import "./Social.css";
import character from "../assets/burger-cheff.png";

export default function Brand() {
  return (
    <div className="social-container-main">
      <h3 className="social-header">PEOPLE SAY...</h3>
      <div className="social-divs">
        <p className="social-text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
          Facilis, magni ipsam!
          <p className="social-name">-Person who knows burgers good</p>
        </p>
        <img className="social-img" src={character} />
      </div>
    </div>
  );
}
