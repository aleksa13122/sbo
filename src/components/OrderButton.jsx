// OrderButton.jsx
// Usage: <OrderButton href="https://wolt.com/en/mlt" label="ORDER NOW" />

import "./orderButton.css";

export default function OrderButton({
  href,
  label = "ORDER NOW",
  icon = true,
}) {
  return (
    <a className="btn3d" href={"https://wolt.com/en/discovery/mlt_chubbz"}>
      <span className="btn3d__shadow" aria-hidden="true" />
      <span className="btn3d__edge" aria-hidden="true" />
      <span className="btn3d__face">
        <span className="btn3d__text">{label}</span>
        {icon && (
          <svg
            className="btn3d__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
            />
          </svg>
        )}
      </span>
    </a>
  );
}
