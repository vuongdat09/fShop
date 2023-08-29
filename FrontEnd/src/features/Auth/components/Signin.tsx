import {  useNavigate  } from "react-router-dom";
import { useLoginMutation } from "../../../api/user";
import { iUser } from "../../../interface/user";
import { Button,  Form, Input, message } from "antd";

const Signin = () => {
  const Navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage();
  const [login] = useLoginMutation();

  const onFinish = (values: iUser) => {

    login(values)
      .unwrap()
      .then((data) => {
        localStorage.setItem('token', JSON.stringify(data))
        localStorage.setItem('admin', JSON.stringify(data.user.role))
        
        messageApi.open({
          type: "success",
          content: "đăng nhập thành công chờ một chút để chuyển sang trang chủ",
        })
        
        
        setTimeout(()=>{
          localStorage.getItem('admin') === "admin"? Navigate('/admin'): Navigate('/')
        },3000)
      })
      .catch(error => {
        if (error.data?.message === 'bạn chưa đăng ký') {
          messageApi.error('Tài khoản chưa đăng ký. Đang chuyển hướng đến trang đăng ký...');
          setTimeout(() => {
            Navigate('/signup') // Redirect to registration page
          }, 2000);
        }
      })
  };




  const onFinishFailed = (errorInfo: iUser) => {
    console.log("Failed:", errorInfo);
  };

  type FieldType = {
    email?: string;
    password?: string;
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
          <a href="/signup" className="m-2 ml-9 hover:shadow-md text-cyan-500">đăng ký</a>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className=" bg-cyan-500 hover:text-white" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Signin;
