import { Button, Form, Input,InputNumber,Select, message } from "antd";
import { ICategory, IProduct } from "../../../../interface/product";
import { useGetCategoryQuery } from "../../../../api/category";
import { useGetProductByIdQuery, useUpdateProductMutation } from "../../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import {useEffect} from 'react'
const EditProduct = () => {
  const {id} = useParams()
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { data: category } = useGetCategoryQuery();
  const {data:productData} = useGetProductByIdQuery(id||"")

 

  useEffect(()=>{
    form.setFieldsValue(productData?.data)
  },[productData?.data])
 
  const [updateProduct] = useUpdateProductMutation();
  const onFinish = (values: IProduct) => {
    updateProduct({data:values , _id:id })
      .unwrap()
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Thêm thành công",
        });
        form.resetFields();
        setTimeout(() => {
          navigate("/admin");
        }, 3000);
      });
  };
  const selecteOption = category?.category?.map((categories:ICategory) => (
    <Select.Option key={categories._id} value={categories._id} >
      {categories.name}
    </Select.Option>
  ))

  
  
  const onFinishFailed = (errorInfo: unknown) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = IProduct;
  return (
    <>
      <h2>Add Product</h2>
      {contextHolder}
      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              validator: (_, value) => {
                if (!value) {
                  return Promise.reject("Please input your price!");
                }
                if (value < 1) {
                  return Promise.reject("Price must be greater than 1");
                }
                return Promise.resolve();
              },
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item label="Category" name="categoryId" rules={[{ required: true }]}>
        <Select>
          {selecteOption}
        </Select>
      </Form.Item>
        <Form.Item<FieldType>
          label="Image"
          name="image"
          rules={[{ required: true, message: "Please input image!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FieldType>
          label="Quantity"
          name="quantity"
          rules={[{ required: true, message: "Please input quantity!" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" className="bg-blue-500" htmlType="submit">
              Submit
            </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditProduct;