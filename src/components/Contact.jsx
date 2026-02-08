import React from "react";
import "./Contact.css";

const CONTACT_LINKS = [
  { label: "+1 (555) 019-2834", href: "tel:+15550192834" },
  {
    label: "hello@seriousburgers.com",
    href: "mailto:hello@seriousburgers.com",
  },
  {
    label: "@seriousburgers_official",
    href: "https://instagram.com/seriousburgers_official",
  },
];

const LOCATION = [
  "882 Patty Meltdown Ave.",
  "Flavor Town, TX 75001",
  "Open Daily: 11am - 11pm",
];

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-deco-line" aria-hidden="true" />

      <div className="contact-container">
        <div className="contact-header">
          <h2 className="brand-title">
            Serious <br className="mobile-break" /> Burgers Only
          </h2>
        </div>

        <div className="contact-columns">
          <section className="contact-col" aria-labelledby="contact-contact">
            <h3 id="contact-contact" className="col-title">
              Contact
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
              Location
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
            ALL RIGHTS RESERVED SBO © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
