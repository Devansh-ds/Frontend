import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function VanDetail() {
  const params = useParams();
  const [vanDetails, setVanDetails] = useState({});

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanDetails(data));
  }, [params.id]);

  console.log(vanDetails.vans);

  return (
    <>
      {vanDetails.vans ? (
        <main className="van-vandetail-main">
          <Link to={"/vans"}>Back to all vans</Link>
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
