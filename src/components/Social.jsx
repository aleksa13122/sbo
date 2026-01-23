import "./Social.css";
import character from "../assets/burger-chef.png";

export default function Brand() {
  return (
    <div className="social-container-main">
      <h3>SOCIAL HEADER</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, magni
        ipsam! Quos omnis eaque inventore
      </p>
      <img className="social-img" src={character} />
    </div>
  );
}
