import { IProduct } from "../../../interface/product";


interface productProps {
  product: IProduct;
}

const Item = ({ product }: productProps) => {
  return (
      <div className="w-full p-4 lg:w-1/4 md:w-1/2">
        <a href={`/products/${product._id}`} className="relative block h-48 overflow-hidden rounded">
          <img alt="ecommerce" className="block object-cover object-center w-full h-full" src={product.image}/>
        </a>
        <div className="mt-4">
          <h3 className="mb-1 text-xs tracking-widest text-gray-500 title-font">{}</h3>
          <h2 className="text-lg font-medium text-gray-900 title-font">{product.name}</h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </div>
  );
};

export default Item;
