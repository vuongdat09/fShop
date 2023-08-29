import { IProduct } from "../../../interface/product";
import { useGetProductsQuery } from "../../../api/product";
import Item from "./Item";
import ListCategory from "../../category/components/List";
import Slide from "./Slide";
const List = () => {
  const { data: products } = useGetProductsQuery();

  const productData = products?.data?.map((product: IProduct) => {
    return (
      <>
        <Item key={product._id} product={product} />
      </>
    );
  });
  return (
    <>
      <Slide/>
      <ListCategory/>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto ">
          <div className="flex flex-wrap -m-4">{productData}</div>
        </div>
      </section>
    </>
  );
};

export default List;
