import { Request, Response } from "express";
import bcrypt from "bcryptjs";

import authService from "../services/auth.service";

class AuthController {

  async register(
    req: Request,
    res: Response
  ) {
    const user = req.body;

    const existingUser =
      await authService.getUserByEmail(
        user.email
      );

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const newUser =
      await authService.register(user);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
    });
  }

async login(req: Request, res: Response) {
  const { email, password } = req.body;

  const user = await authService.getUserByEmail(email);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid password",
    });
  }

  const token = await authService.generateToken(user._id.toString());

  return res.status(200).json({
    success: true,
    message: "Login successful",
    token,
    data: user,
  });

  }
}

export default new AuthController();

