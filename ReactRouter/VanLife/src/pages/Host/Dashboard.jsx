import { Outlet } from "react-router-dom";

export default function HostDashboard() {
  return (
    <>
      <h1>Host dashboard</h1>
      <Outlet />
    </>
  );
}
