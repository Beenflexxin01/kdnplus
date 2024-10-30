import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
function AppLayout() {
  return (
    <div>
      <header>
        <NavBar />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
