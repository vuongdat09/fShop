import  {useGetProductsQuery,useRemoveProductMutation} from "../../../api/product";
import { AiOutlineDelete } from "react-icons/ai";
import { useState } from "react";
import { Popconfirm } from "antd";

const Table = () => {
  const { data } = useGetProductsQuery();
  
  const [removeLoadingMap, setRemoveLoadingMap] = useState<
    Record<number | string, boolean>
  >({});

  const [removeProduct, { isLoading: isRemoveLoading }] =
    useRemoveProductMutation();

  const confirm = (id: number | string) => {
    setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: true }));

    removeProduct(id)
      .unwrap()
      .then(() => {
        
        setRemoveLoadingMap((prevMap) => ({ ...prevMap, [id]: false }));
      });
  };

  return (
    <>
      {data?.data?.map((item: any, index: any) => {
        return (
          <tr
            className="border-b border-gray-200 hover:bg-gray-100"
            key={index}
          >
            <td className="px-6 py-3 text-left whitespace-nowrap">
              <div className="flex items-center">
                <span className="font-medium">{index + 1}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left">
              <div className="flex items-center">
                <span>{item.name}</span>
              </div>
            </td>
            <td className="max-w-xs px-6 py-3 text-center ">
              <img src={item.image} alt="" />
            </td>
            <td className="px-6 py-3 text-center">
              <span className="px-3 py-1 text-xs text-purple-600 bg-purple-200 rounded-full">
                {item.price}
              </span>
            </td>
            <td className="px-6 py-3 text-left">
              <div className="flex items-center">
                <span>{item.desc}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left">
              <div className="flex items-center">
                <span>{item.quantity}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-left">
              <div className="flex items-center">
                <span>{item.categoryId.name}</span>
              </div>
            </td>
            <td className="px-6 py-3 text-center">
              <div className="flex justify-center item-center">
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                  <a href={`/admin/${item._id}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </a>
                </div>
                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                  <Popconfirm
                    placement="top"
                    title={"Xóa sản phẩm"}
                    description={"Mày có chắc cmn chắn muốn xóa không???"}
                    onConfirm={() => confirm(item._id)}
                    okText="Yes"
                    cancelText="No"
                  >
                    <button >
                      {removeLoadingMap[item._id] && isRemoveLoading ? (
                        <AiOutlineDelete className="animate-spin" />
                      ) : (
                        "Xóa"
                      )}
                    </button>
                  </Popconfirm>
                </div>
              </div>
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default Table;
