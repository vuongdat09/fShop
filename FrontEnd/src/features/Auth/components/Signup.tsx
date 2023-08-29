import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../api/user";
import { iUser } from "../../../interface/user";
import { Button,  Form, Input, message } from "antd";

const Signup = () => {
    const Navigate = useNavigate()
    const [messageApi, contextHolder] = message.useMessage();
    const [signup] = useRegisterMutation();
  
    const onFinish = (values: iUser) => {
      signup(values)
        .unwrap()
        .then(() => {
          messageApi.open({
            type: "success",
            content: "đăng ký thành công chờ một chút để chuyển sang đăng nhập",
          });
          setTimeout(()=>{
            Navigate('/login')
          },3000)
        });
    };
  
    const onFinishFailed = (errorInfo: any) => {
      console.log("Failed:", errorInfo);
    };
  
    type FieldType = {
      name?: string
      email?: string;
      password?: string;
      confirmPassword?: string;
    };
    // sử lý đăng nhập
  
    const image = {
      width: "350px",
      height: "500px",
    };
    return (
      <>
        {contextHolder}
        <div className="flex justify-center mx-auto bg-slate-50">
          
          <div>
            <img
              style={image}
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fe006ef-2ed2-48d6-a5b4-362d5fd1a399/ddpc2z3-397957ca-b6b0-48ac-97ca-d9d8f2683477.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmZTAwNmVmLTJlZDItNDhkNi1hNWI0LTM2MmQ1ZmQxYTM5OVwvZGRwYzJ6My0zOTc5NTdjYS1iNmIwLTQ4YWMtOTdjYS1kOWQ4ZjI2ODM0NzcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Pc_M1jMNwi8AzDUX9Sq5Zd6MUsw2Li2Q-WV14XuFR7g"
              alt="rỵh"
            />
          </div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="items-center p-4"
          >
            <Form.Item<FieldType>
              label="Name"
              name="name"
              rules={[
                { required: true, message: "Please input your name!" },
                {min:3, message: "tên đằng nhập ít nhất 3 kí tự"}
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item<FieldType>
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {type:"email", message: "email không đúng định dạng"}
              ]}
            >
              <Input />
            </Form.Item>
  
            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
                {min:6 , message:"password must be at least 6 characters"},
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item<FieldType>
              label="Confirm Password"
              name="confirmPassword"
              rules={[
                { required: true, message: "Please input your password!" },
                {min:6 , message:"password must be at least 6 characters"},
                ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('Passwords do not match'));
                    },
                  })
              ]}
            >
              <Input.Password />
            </Form.Item>
  
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button className="bg-cyan-500 hover:text-white" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    );
}

export default Signup