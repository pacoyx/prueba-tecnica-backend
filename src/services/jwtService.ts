import jwt from "jsonwebtoken";
import { ICard } from "../models/ICard";

export class JwtService {
  constructor() {}

  public Signin(card: ICard) {    
    const token = jwt.sign(card, process.env.JWTKEY, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return token;
  }

  verify(token: string) {
    try {
      const decoded = jwt.verify(token, process.env.JWTKEY);

      return "ok";
    } catch (error) {
      console.log(error);
      return "error";
    }
  }
}
