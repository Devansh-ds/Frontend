import { Link, Links, NavLink } from "react-router-dom";

export default function Header() {
  function handleActiveLink({ isActive }) {
    return isActive ? "my-page" : "";
  }

  return (
    <div className="van-header">
      <Link to={"/"}>
        <h1>#VANLIFE</h1>
      </Link>
      <ul>
        <NavLink className={handleActiveLink} to={"host"}>
          Host
        </NavLink>
        <NavLink className={handleActiveLink} to={"about"}>
          About
        </NavLink>
        <NavLink className={handleActiveLink} to={"vans"}>
          Vans
        </NavLink>
      </ul>
    </div>
  );
}
