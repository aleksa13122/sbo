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

export default function Menu() {
  return (
    <div className="menu-container-main">
      <h1 className="heading-divider">OUR FOOD</h1>
      <h3 className="menu-subheader">CLASSIC BURGERS</h3>

      <h3 className="menu-subheader"></h3>
      <div className="menu-section">
        <div className="menu-card">
          <img src={classic} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">CLASSIC BURGER</div>
          <div className="menu-desc">
            Juicy beef patty, melted cheddar, toasted bun, and classic flavors
            done right.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={classicPlus} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">CLASSIC PLUS</div>
          <div className="menu-desc">
            Double juicy patties, extra melted cheddar, toasted bun, and bigger
            satisfaction.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={shorty} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">SHORTY</div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">
            Compact, juicy, and full of flavor — a small burger made for quick
            bites without cutting corners on taste.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={classicLoaded} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">LOADED CLASSIC</div>
          <div className="menu-desc">
            Stacked beef piled high with bacon, slaw, melted cheese, and sauce,
            built messy, bold, and absolutely unapologetic.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
      <h3 className="menu-subheader">SPECIAL BURGERS</h3>
      <div className="menu-section">
        <div className="menu-card">
          <img src={maxim} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">MAXIMUS</div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">
            A towering stack loaded with crispy bacon, crunchy nachos, melted
            cheese, and bold sauces built for real hunger.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={madman} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">MADMAN</div>
          <div className="menu-desc">
            Slow-cooked smoky ribs stacked over juicy beef, melted cheese,
            crunchy slaw, and sauce made for absolute madness.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={cheesy} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">CHEESY CRAVE</div>
          <img src={badge} className="favourite-badge" alt="Your favourites" />
          <div className="menu-desc">
            Melted cheddar dripping over a juicy patty, toasted bun, and just
            enough crunch to keep things serious and satisfying.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={truffle} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">SBO TRUFFLE</div>
          <div className="menu-desc">
            Earthy truffle sauce folded into juicy beef, melted cheese, and a
            toasted bun, delivering deep flavor with a smooth, luxurious finish.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
      <h3 className="menu-subheader">CHICKEN BURGERS</h3>
      <div className="menu-section">
        <div className="menu-card">
          <img src={classicChicken} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">CLASSIC CHICKEN</div>
          <div className="menu-desc">
            Crispy chicken, fresh lettuce, creamy sauce, and a toasted bun
            keeping things simple and satisfying.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={chickNchesse} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">CHICK N CHEESE</div>
          <div className="menu-desc">
            Golden fried chicken wrapped in melted cheese, soft bun, and a
            creamy bite that hits comfort first and crunch right after.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
        <div className="menu-card">
          <img src={bigChick} alt="Cheesy burger" className="menu-img" />
          <div className="burger-name">BIG CHICK</div>
          <div className="menu-desc">
            A massive crispy chicken fillet layered with melted cheese, bold
            sauce, and a serious crunch that doesn’t hold back.
          </div>
          <div className="menu-cta">
            <a
              href="https://wolt.com/en/mlt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Order now</span>
            </a>
          </div>
        </div>
      </div>
      <h2 className="heading-divider ending-divider">HUNGRY YET?</h2>
    </div>
  );
}
