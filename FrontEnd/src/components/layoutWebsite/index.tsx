import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom"

const LayoutWebSite = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="flex justify-center p-4">
        <Outlet/>
      </div>
        
      <Footer />
    </div>
  );
};

export default LayoutWebSite;