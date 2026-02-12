import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Favourites from "./components/Favourites";
import Brand from "./components/Brand";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import AskChef from "./components/askTheCheff";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 0.85,
      lerp: 0.06,
    });

    window.lenis = lenis; // 👈 add this

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <Hero></Hero>
      <Favourites></Favourites>
      <Brand></Brand>
      <Menu></Menu>
      {/* <AskChef /> */}
      <Social></Social>
      <Contact></Contact>
    </div>
  );
}
