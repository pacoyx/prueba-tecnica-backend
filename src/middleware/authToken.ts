import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const authenticateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("entro al middleware");
  if (req.url == "/tokens/generateToken" || req.url == "/") {
    next();
    return;
  }
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  try {
    const payload = jwt.verify(token, process.env.JWTKEY);
  } catch (e) {
    console.log(e);
    if (e instanceof jwt.JsonWebTokenError) {      
      return res.status(401).send('Token expirado, por favor autenticate');
    }
    return res.status(400).end();
  }
  next();
};
