import "./Menu.css";
import cheesy from "../assets/cheesy.png";
import classic from "../assets/classic-burger.png";
import shorty from "../assets/Sorti.png";
import classicPlus from "../assets/classic-plus-burger.png";
import classicLoaded from "../assets/loaded-classic-burger.png";
import classicChicken from "../assets/classic-chicken-burger.png";
import chickNchesse from "../assets/chick-n-cheese.png";
import bigChick from "../assets/big-chick-burger.png";
import madman from "../assets/madman-burger.png";
import truffle from "../assets/sbo-truffle-burger.png";
import maxim from "../assets/Maxim.png";
import badge from "../assets/favourites-badge.png";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Menu() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="menu-container-main" id="menu">
      <h1 className="heading-divider">{t("menu.heading")}</h1>
      <h3 className="menu-subheader">{t("menu.classicBurgers")}</h3>

      <div className="menu-section">
        <div className="menu-card">
          <img src={classic} alt="Classic burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.classic.name")}</div>
          <div className="menu-desc">{t("menu.burgers.classic.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={classicPlus}
            alt="Classic Plus burger"
            className="menu-img"
          />
          <div className="burger-name">
            {t("menu.burgers.classicPlus.name")}
          </div>
          <div className="menu-desc">{t("menu.burgers.classicPlus.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={shorty} alt="Shorty burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.shorty.name")}</div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">{t("menu.burgers.shorty.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={classicLoaded}
            alt="Loaded Classic burger"
            className="menu-img"
          />
          <div className="burger-name">
            {t("menu.burgers.loadedClassic.name")}
          </div>
          <div className="menu-desc">
            {t("menu.burgers.loadedClassic.desc")}
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
      </div>

      <h3 className="menu-subheader">{t("menu.specialBurgers")}</h3>
      <div className="menu-section">
        <div className="menu-card">
          <img src={maxim} alt="Maximus burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.maximus.name")}</div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">{t("menu.burgers.maximus.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={madman} alt="Madman burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.madman.name")}</div>
          <div className="menu-desc">{t("menu.burgers.madman.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={cheesy} alt="Cheesy Crave burger" className="menu-img" />
          <div className="burger-name">
            {t("menu.burgers.cheesyCrave.name")}
          </div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">{t("menu.burgers.cheesyCrave.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={truffle} alt="SBO Truffle burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.sboTruffle.name")}</div>
          <div className="menu-desc">{t("menu.burgers.sboTruffle.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
      </div>

      <h3 className="menu-subheader">{t("menu.chickenBurgers")}</h3>
      <div className="menu-section">
        <div className="menu-card">
          <img
            src={classicChicken}
            alt="Classic Chicken burger"
            className="menu-img"
          />
          <div className="burger-name">
            {t("menu.burgers.classicChicken.name")}
          </div>
          <div className="menu-desc">
            {t("menu.burgers.classicChicken.desc")}
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img
            src={chickNchesse}
            alt="Chick N Cheese burger"
            className="menu-img"
          />
          <div className="burger-name">
            {t("menu.burgers.chickNcheese.name")}
          </div>
          <div className="menu-desc">{t("menu.burgers.chickNcheese.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={bigChick} alt="Big Chick burger" className="menu-img" />
          <div className="burger-name">{t("menu.burgers.bigChick.name")}</div>
          <div className="menu-desc">{t("menu.burgers.bigChick.desc")}</div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t("menu.orderNow")}</span>
            </a>
          </div>
        </div>
      </div>

      <h2 className="heading-divider ending-divider">
        {t("menu.endingHeading")}
      </h2>
    </div>
  );
}
