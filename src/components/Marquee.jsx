import "./Marquee.css";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="marquee-seq">
          OUR FAVOURITES • OUR FAVOURITES • OUR FAVOURITES • OUR FAVOURITES •
        </span>
        <span className="marquee-seq" aria-hidden="true">
          OUR FAVOURITES • OUR FAVOURITES • OUR FAVOURITES • OUR FAVOURITES •
        </span>
      </div>
    </div>
  );
}
