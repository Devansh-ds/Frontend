import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [vanDetails, setVanDetails] = useState({});
  const location = useLocation();

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data));
  }, [params.id]);

  const backToWhat = location.state?.search.slice(5) || "all";

  return (
    <>
      {vanDetails.vans ? (
        <main className="van-vandetail-main">
          <Link relative="path" to={location.state.search ? `..?${location.state.search}` : ".."}>
            &larr; Back to {backToWhat} vans
          </Link>
          <div className="van-desc">
            <img src={vanDetails.vans.imageUrl} />
            <button className={"van-type" + " " + vanDetails.vans.type.toLowerCase()}>{vanDetails.vans.type}</button>
            <h1 className="name">{vanDetails.vans.name}</h1>
            <h1 className="price">
              ${vanDetails.vans.price}
              <span>/day</span>
            </h1>
            <p className="desc">{vanDetails.vans.description}</p>
            <button className="rent">Rent this van</button>
          </div>
        </main>
      ) : (
        <h2 className="loading">Loading...</h2>
      )}
    </>
  );
}
