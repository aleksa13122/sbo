import "./Brand.css";
import character from "../assets/burger-cheering-coloured.png";
import { useContext, useEffect, useRef } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Brand() {
  const { t } = useContext(LanguageContext);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imgRef.current.classList.add("brand-img--visible");
        } else {
          imgRef.current.classList.remove("brand-img--visible");
        }
      },
      { threshold: 0.4 }, // triggers sooner when leaving viewport
    );
    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="brand">
      <div className="brand__inner">
        <img className="brand-img" ref={imgRef} src={character} />
        <div className="brand-row-second">
          <h4 className="brand__title">{t("brand.title")}</h4>
          <p className="brand__text">{t("brand.description")}</p>
        </div>
      </div>
    </section>
  );
}
