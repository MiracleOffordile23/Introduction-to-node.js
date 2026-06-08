import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModel from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

class AuthService {
  async register(user: IUser) {
    const hashedPassword = await bcrypt.hash(user.password, 10);

    const newUser = await UserModel.create({
      ...user,
      password: hashedPassword,
    });

    return newUser;
  }

  async getUserByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  async generateToken(userId: string) {
    return jwt.sign(
      { id: userId },
      process.env.JWT_SECRET as string,
      { expiresIn: "1d" }
    );
  }

  
}


export default new AuthService();