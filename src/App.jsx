import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Favourites from "./components/Favourites";
import Brand from "./components/Brand";
import Social from "./components/Social";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true, // ✅ makes mouse wheel inertial
      smoothTouch: false, // keep false (mobile already has inertia)
      wheelMultiplier: 1, // lower = slower wheel response (try 0.6–1.0)
      lerp: 0.06, // lower = smoother/floatier (try 0.04–0.12)
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
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
      <Social></Social>
      <Contact></Contact>
    </div>
  );
}
