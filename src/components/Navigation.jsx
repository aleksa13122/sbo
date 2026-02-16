import "./Navigation.css";
import OrderButton from "./OrderButton";
import { useContext, useState, useRef, useEffect } from "react";
import { LanguageContext } from "./context/LanguageContext";

function Navigation() {
  const { language, changeLanguage, t } = useContext(LanguageContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", label: "EN", flag: "gb" },
    { code: "mt", label: "MT", flag: "mt" },
    { code: "it", label: "IT", flag: "it" },
    { code: "de", label: "DE", flag: "de" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode);
    setIsDropdownOpen(false);
  };

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <div className="nav-container-main">
      <a className="nav-left" href="#hero">
        {t("navigation.brand")}
      </a>
      <div className="nav-center">
        <a href="#favourites">{t("navigation.favourites")}</a>
        <a href="#menu">{t("navigation.menu")}</a>
      </div>
      <OrderButton />
      <div className="nav-right">
        <div className="language-dropdown" ref={dropdownRef}>
          <button
            className="language-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img
              src={`https://kapowaz.github.io/circle-flags/flags/${currentLanguage?.flag}.svg`}
              alt={currentLanguage?.label}
              className="flag-icon"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`arrow-icon ${isDropdownOpen ? "rotate" : ""}`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="language-dropdown-menu">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`language-option ${
                    language === lang.code ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <img
                    src={`https://kapowaz.github.io/circle-flags/flags/${lang.flag}.svg`}
                    alt={lang.label}
                    className="flag-icon-dropdown"
                  />
                  {lang.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
