import { useLocation, useOutletContext } from "react-router-dom";

export default function Details() {
  const [van, setVan] = useOutletContext();

  return (
    <div className="my-van-details">
      <p className="name">
        <span>Name: </span>
        {van.name}
      </p>
      <p className="category">
        <span>Category: </span>
        {van.type}
      </p>
      <p className="description">
        <span>Description: </span>
        {van.description}
      </p>

      <p className="visibility">
        <span>Visibility: </span>Public
      </p>
    </div>
  );
}
