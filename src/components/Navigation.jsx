import "./Navigation.css";
import OrderButton from "./OrderButton";

function Navigation() {
  return (
    <div className="nav-container-main">
      <div className="nav-left">SBO</div>
      <div className="nav-center">
        <a>FAVOURITES</a>
        <a>TASTY STUFF</a>
        <a>REVIEWS</a>
      </div>
      <div className="nav-right">
        <button className="language-btn">
          EN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="arrow-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
        <OrderButton></OrderButton>
      </div>
    </div>
  );
}

export default Navigation;
