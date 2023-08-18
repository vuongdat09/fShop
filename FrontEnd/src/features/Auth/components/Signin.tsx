import { useLoginMutation } from "../../../api/user";
import { useForm, SubmitHandler } from "react-hook-form";

import { iUser } from "../../../interface/user";

const Signin = () => {
  const [login] = useLoginMutation();
  const { register, handleSubmit } = useForm<iUser>();
  const onSubmit: SubmitHandler<iUser> = (data) => {
    console.log(data);
    login(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input className="" {...register("email")} />
        </div>
        <div>
          <label>Password</label>
          <input className="" {...register("password")} />
        </div>

        <input className="" type="submit" />
      </form>
    </>
  );
};

export default Signin;
