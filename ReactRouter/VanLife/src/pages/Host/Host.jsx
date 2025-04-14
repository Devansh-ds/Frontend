import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HostLayout() {
  function makeButtonActive({ isActive }) {
    return isActive ? "my-link" : null;
  }

  return (
    <>
      <main>
        <div className="host-header">
          <nav>
            <NavLink className={makeButtonActive} to={"."} end>
              Dashboard
            </NavLink>
            <NavLink className={makeButtonActive} to={"income"}>
              Income
            </NavLink>
            <NavLink className={makeButtonActive} to={"vans"}>
              Vans
            </NavLink>
            <NavLink className={makeButtonActive} to={"reviews"}>
              Reviews
            </NavLink>
          </nav>
        </div>
        <Outlet />
      </main>
    </>
  );
}
