import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  );
}

function HomeMain() {
  return (
    <main className="van-home-main">
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
      <button>Find your van</button>
    </main>
  );
}
