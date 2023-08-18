import Header from "./Header";
import Footer from "./Footer";
import {Outlet} from "react-router-dom" 
import Nav from "./Nav";

const LayoutAdmin = () => {
  return (
    <>
      <Header />
      <div className="p-4">
        <Outlet/>
      </div>
      <Footer />
    </>
  );
};

export default LayoutAdmin;
