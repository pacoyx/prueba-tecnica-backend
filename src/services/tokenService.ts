import { ICard } from "../models/ICard";
import { validarTarjeta } from "./creditCardService";
import { JwtService } from "./jwtService";
import { getDataCardByToken, registerCardDB } from "./redisService";

export class TokenService {
  constructor() {}

  async getToken(card: ICard) {
    // validamos payload _____________________________
    const rpta = await validarTarjeta(card);
    if (!rpta.estado) {
      const res = {
        status: false,
        error: rpta.msg,
        token: "",
      };
      return res;
    }

    //generamos token _______________________________
    const token = new JwtService().Signin(card);

    //grabamos en redis _____________________________
    await registerCardDB(token, card);

    // return
    const res = {
      status: true,
      error: "",
      token: token,
    };
    return res;
  }

  async getdataCard(token: string) {
    let dataToken = await getDataCardByToken(token);
    if (!dataToken) {
      return {
        status: false,
        data: "",
        error: "expiro la data de la tarjeta",
      };
    }
    
    delete dataToken['cvv'];
    return {
      status: true,
      data: dataToken,
    };
  }

  validateToken(token: string) {
    return new JwtService().verify(token);
  }

  transactionPay() {
    console.log("TransactionPay()");
  }
}
