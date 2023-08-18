import { signupSchema ,signinSchema } from "../Schemas/auth";
import bcryptjs from "bcryptjs";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const {name, email, password , confirmPassword} = req.body;
    const body = {
      name,
      email,
      password,
      confirmPassword,
    }
    const { error } = signupSchema.validate(body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }

    const userExist = await User.findOne({ email: body.email });
    if (userExist) {
      return res.status(400).json({ message: "email đã tồn tại" });
    }

    const hashedPassword = await bcryptjs.hash(body.password, 10);
    console.log(password);

    const user = await User.create({
      name: body.name,
      email: body.email,
      password: hashedPassword,
    });

    const accessToken = jwt.sign({ _id: user._id }, "tiendatne", {
      expiresIn: "1d",
    });

    return res.status(200).json({
      message: "đăng ký thành công",
      accessToken,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const signin = async (req, res) => {
    try {
        const {email,password} = req.body;
        const {error} = signinSchema.validate(req.body, {expiresIn:false})
        if (error) {
            const errors = error.details.map(err => err.message);
            return res.status(400).json({message: errors})
        }
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({
                message: "bạn chưa đăng ký"
            })
        }

        const isMatch = await bcryptjs.compare(password, user.password)
        console.log(password);
        if (!isMatch) {
            return res.status(404).json({
                message :"mật khẩu không đúng"
            })
        }

        const accessToken =  jwt.sign({_id: user._id},"tiendatne",{expiresIn: "1d"})
        return res.status(200).json({
            message:"đăng nhập thành công",
            accessToken,
            user
        })
    } catch (error) {
        return res.status(400).json({
            message:error.message
        })
    }
}