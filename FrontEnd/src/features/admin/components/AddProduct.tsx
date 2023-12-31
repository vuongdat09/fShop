import { Button, Form, Input, InputNumber, Select, message } from "antd";
import { IProduct } from "../../../interface/product";
import { useGetCategoryQuery } from "../../../api/category";
import { useAddProductMutation } from "../../../api/product";
import { ICategory } from "../../../interface/product";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { data: category } = useGetCategoryQuery();
  const [addProduct] = useAddProductMutation();
  const onFinish = (values: IProduct) => {
    addProduct(values)
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
          <InputNumber />
        </Form.Item>
        <Form.Item<FieldType>
          label="Description"
          name="desc"
          rules={[{ required: true, message: "Please input description!" }]}
        >
          <TextArea rows={5} />
        </Form.Item>

        <Form.Item
          label="Category"
          name="categoryId"
          rules={[{ required: true, message: "Please input category!" }]}
        >
          <Select style={{ width: 200 }}>
            {category?.category?.map((categories: ICategory) => (
              <Select.Option
                key={categories._id}
                defaultValue={categories.name[0]}
                value={categories._id}
              >
                {categories.name}
              </Select.Option>
            ))}
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
          label="quantity"
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

export default AddProduct;
