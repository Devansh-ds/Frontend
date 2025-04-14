import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HostVansDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  function makeButtonActive({ isActive }) {
    return isActive ? "my-link" : null;
  }

  if (!van) {
    return <h1 className="loading">Loading...</h1>;
  }

  return (
    <>
      <div className="back-host-vans">
        <Link relative="path" to={".."}>
          Back to all vans
        </Link>
      </div>
      <div className="host-van-detail">
        <div className="van-detail">
          <img src={van.imageUrl} />
          <div className="detail-text">
            <h4 className={"van-type" + " " + van.type}>{van.type}</h4>
            <h1>{van.name}</h1>
            <h2>
              ${van.price}
              <span>/day</span>
            </h2>
          </div>
        </div>
        <div className="van-nav">
          <ul>
            <NavLink className={makeButtonActive} to={"."} end>
              Details
            </NavLink>
            <NavLink className={makeButtonActive} to={"pricing"}>
              Pricing
            </NavLink>
            <NavLink className={makeButtonActive} to={"photos"}>
              Photos
            </NavLink>
          </ul>
        </div>
        <Outlet context={[van, setVan]} />
      </div>
    </>
  );
}
