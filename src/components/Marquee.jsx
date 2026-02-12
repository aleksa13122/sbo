import "./Marquee.css";
import { useContext } from "react";
import { LanguageContext } from "./context/LanguageContext";

export default function Marquee() {
  const { t } = useContext(LanguageContext);
  const marqueeText = `${t("marquee.text")} • ${t("marquee.text")} • ${t("marquee.text")} • ${t("marquee.text")} •`;

  return (
    <div className="marquee">
      <div className="marquee-track">
        <span className="marquee-seq">{marqueeText}</span>
        <span className="marquee-seq" aria-hidden="true">
          {marqueeText}
        </span>
      </div>
    </div>
  );
}
