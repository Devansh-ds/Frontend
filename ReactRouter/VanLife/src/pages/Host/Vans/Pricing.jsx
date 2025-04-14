import { useOutletContext } from "react-router-dom";

export default function Pricing() {
  const [van, setVan] = useOutletContext();

  return (
    <div className="my-van-pricing">
      <h1>
        ${van.price}.00
        <span>/day</span>
      </h1>
    </div>
  );
}
