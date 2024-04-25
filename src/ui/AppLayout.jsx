import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import { useState } from "react";
import Overlay from "./OverLay";

function AppLayout() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClose() {
    setIsOpen(false);
  }
  return (
    <div className="font-jost">
      <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      <main className="relative  sm:px-10  md:px-20 lg:px-40 xl:px-80 mb-20">
        <Outlet />
        {isOpen && <Overlay onClick={handleClose} />}
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
