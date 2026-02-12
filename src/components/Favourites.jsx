import "../components/Favourites.css";
import Marquee from "./Marquee";
import cheesy from "../../src/assets/Cheesy.png";
import maximus from "../../src/assets/Maxim.png";
import shorty from "../../src/assets/Sorti.png";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Favourites() {
  const { t } = useContext(LanguageContext);

  return (
    <div>
      <Marquee />
      <div className="favourites-container-main" id="favourites">
        <div className="favourites-card">
          <img src={cheesy} alt="Cheesy burger" className="favourites-img" />
          <div className="favourites-header">
            {t("favourites.cheesyCrave.title")}
          </div>
          <div className="favourites-desc">
            {t("favourites.cheesyCrave.desc")}
          </div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("favourites.cheesyCrave.cta")}</span>
            </a>
          </div>
        </div>
        <div className="favourites-card">
          <img src={maximus} alt="Maximus burger" className="favourites-img" />
          <div className="favourites-header">
            {t("favourites.maximus.title")}
          </div>
          <div className="favourites-desc">{t("favourites.maximus.desc")}</div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("favourites.maximus.cta")}</span>
            </a>
          </div>
        </div>
        <div className="favourites-card">
          <img src={shorty} alt="shorty burger" className="favourites-img" />
          <div className="favourites-header">
            {t("favourites.shorty.title")}
          </div>
          <div className="favourites-desc">{t("favourites.shorty.desc")}</div>
          <div className="favourites-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("favourites.shorty.cta")}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
