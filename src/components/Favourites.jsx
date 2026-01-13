import "../components/Favourites.css";
import Marquee from "./Marquee";

export default function Favourites() {
  return (
    <div>
      <Marquee></Marquee>
      <div className="favourites-container-main">
        <div className="favourites-card">
          <div className="favourites-img">PICTURE</div>
          <div className="favourites-header">CHEESY CRAVE</div>
          <div className="favourites-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            fugit facere architecto neque molestias libero exercitationem, sint
            asperiores
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
          <div className="favourites-img">PICTURE</div>
          <div className="favourites-header">MAXIMUS</div>
          <div className="favourites-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            fugit facere architecto neque molestias libero exercitationem, sint
            asperiores
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
          <div className="favourites-img">PICTURE</div>
          <div className="favourites-header">SHORTY</div>
          <div className="favourites-desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique
            fugit facere architecto neque molestias libero exercitationem, sint
            asperiores
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
