import React from "react";
import { useSelector } from "react-redux";

const Item = () => {
  const cartLocal = JSON.parse(localStorage.getItem("cart"));
  const totalQT = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  const quantity = totalQT;
  const sumPrice = totalPrice
  console.log(quantity);

  console.log(cartLocal);
  const cart = cartLocal.map((item: any) => {
    return (
        <div className="justify-between p-6 mb-6 bg-white rounded-lg shadow-md sm:flex sm:justify-start">
        <img src={item.image} alt="product-image" className="w-full rounded-lg sm:w-40" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
            <p className="mt-1 text-xs text-gray-700">$ {item.price}</p>
          </div>
          <div className="flex justify-between mt-4 sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100">
              <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
              <input placeholder="/" className="w-8 h-8 text-xs text-center bg-white border outline-none" type="number" value="2" min="1" />
              <span className="px-3 py-1 duration-100 bg-gray-100 rounded-r cursor-pointer hover:bg-blue-500 hover:text-blue-50"> + </span>
            </div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">$ {sumPrice}</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 duration-150 cursor-pointer hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <>{cart}</>;
};

export default Item;
