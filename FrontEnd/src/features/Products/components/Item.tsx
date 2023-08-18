import { IProduct } from "../../../interface/product";
import {AiOutlineShoppingCart} from "react-icons/ai";


interface productProps {
  product: IProduct;
}

const Item = ({ product }: productProps) => {
  return (
    <div className="">
      <div className="flex flex-col duration-300 shadow-md cursor-pointer w-96 hover:-translate-y-1">
        <div className="relative inline h-48 group">
          <img
            className="absolute object-cover w-full h-full rounded-t"
            src={product.image}
            alt="Product Preview"
          />

          <div className="absolute bottom-0 flex flex-row justify-end w-full h-16 px-3 space-x-2 transition-all duration-200 ease-in-out delay-100 opacity-0 bg-none group-hover:opacity-100 group-hover:bg-gradient-to-t from-black/20 via-gray-800/20 to-transparent">
            <button className="px-1 my-auto transition-colors duration-200 rounded-full bg-gray-50/10 h-9 w-9 hover:bg-gray-50/20">
              <i
                className="text-xl text-gray-200 transition-all duration-200 mdi mdi-playlist-plus hover:text-white"
                title="Add to Bookmarks"
              ></i>
            </button>

            <button className="px-1 my-auto transition-colors duration-200 rounded-full bg-gray-50/10 h-9 w-9 hover:bg-gray-50/20">
              <i
                className="p-1 text-xl text-gray-200 transition-all duration-200 mdi mdi-heart hover:text-white"
                title="Add to Favorites"
              ></i>
            </button>
          </div>
        </div>

        <div className="flex flex-col p-3 bg-white rounded-b">
          <div className="text-sm font-semibold text-gray-900 truncate hover:underline">
            {product.name}
          </div>

          <div className="mt-1 text-gray-400 truncate text-xxs">
            by
            <a className="font-semibold hover:underline"> EgoistDeveloper </a>
            in
            <a className="font-semibold hover:underline"> e-commerce </a>
          </div>

          <div className="mt-4 mb-1 text-sm font-bold text-gray-600">{product.price}</div>

          <div className="flex flex-row mt-2">
            <div className="flex flex-col flex-auto">
              <div className="flex flex-row group">
                <i
                  className="text-xs transition-all duration-200 mdi mdi-star text-amber-400 hover:text-amber-500"
                  title="Worst"
                ></i>

                <i
                  className="text-xs transition-all duration-200 mdi mdi-star text-amber-400 hover:text-amber-500"
                  title="Bad"
                ></i>

                <i
                  className="text-xs transition-all duration-200 mdi mdi-star text-amber-400 hover:text-amber-500"
                  title="Not Bad"
                ></i>

                <i
                  className="text-xs transition-all duration-200 mdi mdi-star text-amber-400 hover:text-amber-500"
                  title="Good"
                ></i>

                <i
                  className="text-xs transition-all duration-200 mdi mdi-star text-amber-400 hover:text-amber-500"
                  title="Awesome"
                ></i>

                <div className="ml-1 text-gray-400 text-xxs hover:underline">
                  (45)
                </div>
              </div>

              <div
                className="mt-1 text-gray-400 text-xxs"
                title="34k Downlaods in this year"
              >
                34k Downloads
              </div>
            </div>

            <div className="flex flex-row justify-end flex-auto">
              <a href="/cart" className="flex px-3 py-2 my-auto mr-2 text-xs transition-all duration-200 border border-amber-500 group hover:bg-amber-500 rounded-xss">
                <AiOutlineShoppingCart/>
              </a>

              <a className="flex px-3 py-2 my-auto text-xs transition-all duration-200 border border-amber-500 group hover:bg-amber-500 rounded-xss">
                <i className="delay-100 mdi mdi-eye-outline text-amber-700 group-hover:text-white"></i>

                <div className="ml-2 font-semibold delay-100 text-xxs text-amber-700 group-hover:text-white">
                    <a href={`/products/${product._id}`}>
                        <button>
                            Live Preview
                        </button>
                    </a>
                  
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
