import { Outlet } from "react-router-dom";

import Footer from "../conponents/footer/Footer";
import Header from "../conponents/header/Header";

const MainLayouts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="min-h-[calc(100vh-290px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
