import Header from "./Header";
// import Footer from "./Footer";
import {Outlet} from "react-router-dom"

const LayoutWebSite = () => {

  return (
    <div className="w-full">
      <Header />
      <div  className="flex justify-center p-4">
        <div>
          
        </div>
        <Outlet/>
      </div>

    </div>
  );
};

export default LayoutWebSite;