import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setHostVans(data.vans));
  }, []);

  const hostVansElement = hostVans.map((van) => {
    return (
      <Link to={`/host/vans/${van.id}`} key={van.id}>
        <div className="van-small-card">
          <img src={van.imageUrl} />
          <div className="van-small-detail">
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <div className="host-vans">
      <h1>Your listed vans</h1>
      {hostVans.length > 0 ? hostVansElement : <h1>Loading...</h1>}
    </div>
  );
}
