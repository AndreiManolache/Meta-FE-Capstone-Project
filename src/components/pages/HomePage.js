import ReservationsHero from "../sections/MainHero";
import Specials from "../sections/Specials";
import Testimonials from "../sections/Testimonials";
import About from "../sections/About";
export default function Homepage() {
  return (
    <>
      <ReservationsHero />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
