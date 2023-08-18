import Table from "./Table";
import { useGetProductsQuery } from "../../../api/product";

const List = () => {
  const { data } = useGetProductsQuery();
  return (
    <div>
      <div>
        <a href="/admin/add">
          <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
            Add to cart
          </button>
        </a>
      </div>
      <div className="overflow-x-auto">
        <div className="flex items-center justify-center min-h-screen overflow-hidden font-sans bg-gray-100 min-w-screen">
          <div className="w-full lg:w-5/6">
            <div className="my-6 bg-white rounded shadow-md">
              <table className="w-full table-auto min-w-max">
                <thead>
                  <tr className="text-sm leading-normal text-gray-600 uppercase bg-gray-200">
                    <th className="px-6 py-3 text-left">Id</th>
                    <th className="px-6 py-3 text-left">Name</th>
                    <th className="px-6 py-3 text-center">Image</th>
                    <th className="px-6 py-3 text-center">Price</th>
                    <th className="px-6 py-3 text-center">Description</th>
                    <th className="px-6 py-3 text-center">Quantity</th>
                    <th className="px-6 py-3 text-center">Category</th>
                    <th className="px-6 py-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm font-light text-gray-600">
                  <Table />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
