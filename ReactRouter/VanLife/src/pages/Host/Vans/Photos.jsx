import { useOutletContext } from "react-router-dom";

export default function Photos() {
  const [van, setVan] = useOutletContext();
  return (
    <div className="my-van-photo">
      <img src={van.imageUrl} />
    </div>
  );
}
