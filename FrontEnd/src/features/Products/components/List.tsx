import { IProduct } from "../../../interface/product"
import { useGetProductsQuery } from "../../../api/product";
import Item from "./Item";
const List = () => {
  const {data:products} = useGetProductsQuery()
  const productData = products?.data?.map((product:IProduct) =>{
    return (
      <>
        <Item key={product._id} product={product}/>
      </>
      
    )
  })
  return (
    <div className="grid grid-cols-3 gap-4 m-4">
      {productData}
    </div>
  )
}

export default List