import { ICard } from "../models/ICard";
import valid from "card-validator";

export const validarTarjeta = async (card: ICard) => {
  const numberValidation = valid.number(card.card_number);
  console.log(numberValidation);
  if (!numberValidation.isValid) {
    const resp = {
      estado: false,
      msg: "numero de tarjeta invalido",
    };
    return resp;
  }

  const valcvv = valid.cvv(card.cvv);
  if (!valcvv.isValid) {
    const resp = {
      estado: false,
      msg: "CVV invalido",
    };
    return resp;
  }

  const valExpireYear = valid.expirationYear(card.expiration_year);
  if(!valExpireYear.isValid){
    const resp = {
        estado: false,
        msg: "Año invalido",
      };
      return resp;
  }

  const valExpireMonth = valid.expirationMonth(card.expiration_month);
  if(!valExpireMonth.isValid){
    const resp = {
        estado: false,
        msg: "Mes invalido",
      };
      return resp;
  }



  const resp = {    
    estado: true,
    msg: "ok",
  };
  return resp;
};
