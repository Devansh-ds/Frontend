import { useEffect, useState } from "react";
import { NavLink, Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");
  const displayedVans = typeFilter ? vans.filter((van) => van.type.toLowerCase() === typeFilter) : vans;

  useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = displayedVans.map((van, index) => {
    van.type = van.type.charAt(0).toUpperCase() + van.type.slice(1);
    return (
      <Link key={van.id} to={van.id} state={{ search: searchParams.toString() }}>
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

  function classActiveFilter(type) {
    return typeFilter === type ? type : "";
  }

  return (
    <>
      <main className="van-info-main">
        <div className="search-vans">
          <h1>Explore our van options</h1>
          <div className="filter-clear">
            <div className="filter-buttons">
              <button
                className={classActiveFilter("simple")}
                onClick={() => {
                  return setSearchParams({ type: "simple" });
                }}
              >
                Simple
              </button>
              <button
                className={classActiveFilter("luxury")}
                onClick={() => {
                  return setSearchParams({ type: "luxury" });
                }}
              >
                Luxury
              </button>
              <button
                className={classActiveFilter("rugged")}
                onClick={() => {
                  return setSearchParams({ type: "rugged" });
                }}
              >
                Rugged
              </button>
            </div>
            {typeFilter ? <NavLink className="clear-filter">Clear Filter</NavLink> : null}
          </div>
        </div>
        <div className="all-vans">{vansElement}</div>
      </main>
    </>
  );
}
