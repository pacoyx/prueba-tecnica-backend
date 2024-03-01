import { Router, Request, Response } from "express";
import { TokenService } from "../services/tokenService";

const tokenRouter = Router();

tokenRouter.post("/generateToken", async (req: Request, res: Response) => {
  const rptaToken = await new TokenService().getToken(req.body);
  const resp = {
    status: rptaToken.status ? "00" : "99",
    success: rptaToken.status,
    message: rptaToken.status ? "" : rptaToken.error,
    token: rptaToken.token,
  };
  res.status(201).json(resp);
});

tokenRouter.get("/card", async (req: Request, res: Response) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  const resData = await new TokenService().getdataCard(token);
  const resp = {
    status: resData.status ? "00" : "99",
    success: resData.status,
    message: resData.status ? "Data success" : resData.error,
    card: resData.status ? resData.data : "",
  };
  res.status(201).json(resp);
});

// test work middleware
tokenRouter.post("/pay", async (req: Request, res: Response) => {
  const token = await new TokenService().transactionPay();
  const resp = {
    status: "00",
    success: true,
    message: "pago success",
    token: token,
  };
  res.status(201).json(resp);
});

export default tokenRouter;
