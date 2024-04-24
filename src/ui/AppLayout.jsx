import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="font-jost">
      <Nav />
      <main className="relative  sm:px-10  md:px-20 lg:px-40 xl:px-80 mb-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
