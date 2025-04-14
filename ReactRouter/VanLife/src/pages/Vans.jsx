import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = vans.map((van, index) => {
    van.type = van.type.charAt(0).toUpperCase() + van.type.slice(1);

    return (
      <Link key={van.id} to={`/vans/${van.id}`}>
        <div id={van.id} key={van.id} className="van-card">
          <img src={van.imageUrl} />
          <div className="van-name-price">
            <h4>{van.name}</h4>
            <div className="price">
              <h4>${van.price}</h4>
              <p>/day</p>
            </div>
          </div>
          <button className={"van-type" + " " + van.type.toLowerCase()}>{van.type}</button>
        </div>
      </Link>
    );
  });

  return (
    <>
      <main className="van-info-main">
        <div className="search-vans">
          <h1>Explore our van options</h1>
          <div className="filter-clear">
            <div className="filter-buttons">
              <button>Simple</button>
              <button>Luxury</button>
              <button>Rugged</button>
            </div>
            <button className="clear-filter">Clear Filters</button>
          </div>
        </div>
        <div className="all-vans">{vansElement}</div>
      </main>
    </>
  );
}
