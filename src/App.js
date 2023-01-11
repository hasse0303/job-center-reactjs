import Navbar from "./components/Navbar";
import SmallNavbar from "./components/SmallNavbar";
import { Outlet } from "react-router-dom";
import Sidenav from "./components/Sidenav";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  let [sidenavShow, setSidenavShow] = useState(false);
  const toggle = () => {
    setSidenavShow(!sidenavShow);
  };
  return (
    <div className="flex flex-col h-screen">
      <div
        className={`${
          sidenavShow
            ? "block fixed inset-0 bg-gray-900 z-50 bg-opacity-80"
            : "hidden"
        }`}
      >
        <Sidenav toggle={toggle} />
      </div>
      <div className="hidden md:block">
        <SmallNavbar />
      </div>
      <div>
        <Navbar toggle={toggle} />
      </div>
      <div className="mb-auto">
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
