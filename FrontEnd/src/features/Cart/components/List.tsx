import Item from "./Item";

const List = () => {




  return (
    <div className="">
    <h1 className="mb-10 text-2xl font-bold text-center">Cart Items</h1>
    <div className="justify-center max-w-5xl px-6 mx-auto md:flex md:space-x-6 xl:px-0">
      <div className="rounded-lg md:w-2/3">
        <Item/>
      </div>

      <div className="h-full p-6 mt-6 bg-white border rounded-lg shadow-md md:mt-0 md:w-1/3">
        <div className="flex justify-between mb-2">
          <p className="text-gray-700">Subtotal</p>
          <p className="text-gray-700">$129.99</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Shipping</p>
          <p className="text-gray-700">$4.99</p>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="text-lg font-bold">Total</p>
          <div className="">
            <p className="mb-1 text-lg font-bold">$134.98 USD</p>
            <p className="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
    </div>
  </div>
  );
};

export default List;
