import "./Brand.css";
import character from "../assets/burger-cheering-coloured.png";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Brand() {
  const { t } = useContext(LanguageContext);

  return (
    <section className="brand">
      <div className="brand__inner">
        <img className="brand-img" src={character} />
        <div className="brand-row-second">
          <h4 className="brand__title">{t("brand.title")}</h4>
          <p className="brand__text">{t("brand.description")}</p>
        </div>
      </div>
    </section>
  );
}
