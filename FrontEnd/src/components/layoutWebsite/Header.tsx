import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";

const Header = () => {
  const cartItem = JSON.parse(localStorage.getItem("cart"));
  console.log(cartItem);
  return (
    <header className="bg-white shadow-md shadow-slate-500">
      <nav className="flex items-center justify-between px-6 mx-auto ">
        <div className="">
          <img
            className="w-16"
            src="https://www.saokim.com.vn/blog/wp-content/uploads/2013/01/thiet-ke-logo3.jpg"
            alt=""
          />
        </div>
        <div className="">
          <ul className="flex items-center gap-5">
            <li>
              <a className="hover:text-slate-700" href="">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-slate-700" href="">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-slate-700" href="">
                Source
              </a>
            </li>
            <li>
              <a className="hover:text-slate-700" href="">
                Concat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <a href="./login">
            <button className="p-2 px-5 bg-orange-300 rounded-full text-slate-700 hover:bg-slate-600">
              Sign In
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
