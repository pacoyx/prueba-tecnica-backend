import { ICard } from "../../src/models/ICard";
import { validarTarjeta } from "../../src/services/creditCardService";

describe("validar datos tarjeta", () => {
  it("tarjeta con numero vacio debe indicar numero no es valido", async () => {
    const card: ICard = {
      card_number: undefined!,
      cvv: 111,
      expiration_month: "09",
      expiration_year: "35",
      email: "pacoyx@gmail.com",
    };
    const result = await validarTarjeta(card);
    expect(result).toEqual({
      estado: false,
      msg: "numero de tarjeta invalido",
    });
  });
});

describe("validar datos tarjeta", () => {
  it("tarjeta con numero CVV invalido debe indicar 'CVV invalido'", async () => {
    const card: ICard = {
      card_number: 4912461031084968,
      cvv: 999,
      expiration_month: "09",
      expiration_year: "35",
      email: "pacoyx@gmail.com",
    };
    const result = await validarTarjeta(card);
    expect(result.msg).toEqual("CVV invalido");
  });
});

describe("validar datos tarjeta", () => {
  it("tarjeta con numero de año invalido'", async () => {
    const card: ICard = {
      card_number: 4912461031084968,
      email: "pacoyx@gmail.com",
      cvv: 682,
      expiration_month: "09",
      expiration_year: "00000",
    };
    const result = await validarTarjeta(card);
    expect(result.msg).toEqual("Año invalido");
  });
});
