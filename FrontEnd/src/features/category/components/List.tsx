import React from "react";
import { useGetCategoryQuery } from "../../../api/category";

const List = () => {
  const { data: categories } = useGetCategoryQuery();
  const listCategories = categories?.category?.map((category) => {
    return (
      <>
        <li>
          <a
            className="inline-block px-4 py-2 no-underline hover:text-black hover:underline"
            href="/"
          >
            {category.name}
          </a>
        </li>
      </>
    );
  });
  return (
    <>
      <nav id="store" className="top-0 z-30 w-full px-6 py-1">
        <div className="container flex flex-wrap items-center justify-between w-full px-2 py-3 mx-auto mt-0">
          <div
            className="order-3 hidden w-full md:flex md:items-center md:w-auto md:order-1"
            id="menu"
          >
            <nav>
              <ul className="items-center justify-between pt-4 text-base text-gray-700 md:flex md:pt-0">
                {listCategories}
              </ul>
            </nav>
          </div>

          <div className="flex items-center" id="store-nav-content">
            <a
              className="inline-block pl-3 no-underline hover:text-black"
              href="#"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z"></path>
              </svg>
            </a>

            <a
              className="inline-block pl-3 no-underline hover:text-black"
              href="#"
            >
              <svg
                className="fill-current hover:text-black"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default List;
