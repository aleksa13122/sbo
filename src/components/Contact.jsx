import React, { useContext } from "react";
import "./Contact.css";
import { LanguageContext } from "./context/LanguageContext";

function Contact() {
  const { t } = useContext(LanguageContext);

  const CONTACT_LINKS = [
    { label: t("contact.phone"), href: "tel:+15550192834" },
    { label: t("contact.email"), href: "mailto:hello@seriousburgers.com" },
    {
      label: t("contact.instagram"),
      href: "https://instagram.com/seriousburgers_official",
    },
  ];

  const LOCATION = [
    t("contact.address1"),
    t("contact.address2"),
    t("contact.hours"),
  ];

  return (
    <section className="contact-section">
      <div className="contact-deco-line" aria-hidden="true" />

      <div className="contact-container">
        <div className="contact-header">
          <h2 className="brand-title">
            {t("contact.brandTitle").split(" ")[0]}{" "}
            <br className="mobile-break" />{" "}
            {t("contact.brandTitle").split(" ").slice(1).join(" ")}
          </h2>
        </div>

        <div className="contact-columns">
          <section className="contact-col" aria-labelledby="contact-contact">
            <h3 id="contact-contact" className="col-title">
              {t("contact.contactTitle")}
            </h3>
            <ul className="info-list">
              {CONTACT_LINKS.map(({ label, href }) => (
                <li key={href} className="info-item">
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </section>

          <section className="contact-col" aria-labelledby="contact-location">
            <h3 id="contact-location" className="col-title">
              {t("contact.locationTitle")}
            </h3>
            <ul className="info-list">
              {LOCATION.map((line) => (
                <li key={line} className="info-item">
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="contact-copyright">
          <p className="copyright-text">
            {t("contact.copyright")} {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
