import { createBrowserRouter  } from "react-router-dom";
import LayoutAdmin from "./components/layoutAdmin";
import LayoutWebSite from "./components/layoutWebsite";
import MainPage from "./features/Products/page/main";
import Detail from "./features/Products/page/detail";
import AdminProduct from "./features/admin/components/ListProduct";
import AddProduct from "./features/admin/components/AddProduct";
import CartPage from "./features/Cart/Page/main";
import EditProduct from "./features/admin/components/UpdateProduct";
import Signin from "./features/Auth/components/Signin";
import Signup from "./features/Auth/components/Signup";
import ManegerCategory from "./features/category/components/ManegerCategory";


const router = createBrowserRouter([
    { path:"/", element: <LayoutWebSite /> , children:[
        { path:"/" , element:<MainPage />},
        { path:"products/:id" , element:<Detail />},
        { path:"/cart" , element :<CartPage/>},
        {path:"/login", element: <Signin/>},
        {path:"/signup", element: <Signup/>}
    ]},
    {path:"/admin" , element: <LayoutAdmin /> , children:[
        {path:"/admin", element: <AdminProduct/>},
        {path:"/admin/add", element: <AddProduct/>},
        {path:"/admin/:id", element: <EditProduct/>},
        {path:"/admin/category", element: <ManegerCategory/>}
    ]},
    
])
export default router