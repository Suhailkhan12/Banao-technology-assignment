import { Outlet } from "react-router-dom";
import "./applayout.scss";
import Header from "../features/Header/Header";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="applayout">
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
