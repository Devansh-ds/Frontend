import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <AboutMain />
    </>
  );
}

function AboutMain() {
  return (
    <main className="van-about-main">
      <img src="src/assets/about-hero.png" />
      <div className="about-info">
        <h2 className="moto">Don't squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van rental. Our vans are reactified before each trip to ensure your travel
          plans can off without a hitch.(Hitch costs extra)
        </p>
        <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
      </div>
      <div className="about-more">
        <h2>Your destination is waiting. Your van is ready</h2>
        <button>Explore our vans</button>
      </div>
    </main>
  );
}
