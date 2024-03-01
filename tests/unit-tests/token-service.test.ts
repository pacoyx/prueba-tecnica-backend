import { ICard } from "../../src/models/ICard";
import { JwtService } from "../../src/services/jwtService";
import { TokenService } from "../../src/services/tokenService";

describe("token services", () => {
  it("generar una cadena string de token", () => {
    const card: ICard = {
      card_number: 4912461031084968,
      cvv: 111,
      expiration_month: "09",
      expiration_year: "35",
      email: "pacoyx@gmail.com",
    };
    const result = new JwtService().Signin(card);
    expect(result).not.toBeNull();
  });
});

describe("token services", () => {
  it("valida token expirado y no debe pasar", () => {
    const result = new JwtService().verify(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXJkX251bWJlciI6IjQ5MTI0NjEwMzEwODQ5NjgiLCJlbWFpbCI6InBhY295eEBnbWFpbC5jb20iLCJjdnYiOiIxMTEiLCJleHBpcmF0aW9uX21vbnRoIjoiMDkiLCJleHBpcmF0aW9uX3llYXIiOiIzNSIsImlhdCI6MTcwOTI0NzYwOSwiZXhwIjoxNzA5MjQ3NjY5fQ.9BMJFG3aWgggxsSTUdOiuyu6HEZfJ4HxsbZCRoC9nSw"
    );
    expect(result).toEqual("error");
  });
});

describe("token services", () => {
  it("obtener datos de tarjeta con token expirado devuelve mensaje de aviso deexpiracion", async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjYXJkX251bWJlciI6IjQ5MTI0NjEwMzEwODQ5NjgiLCJlbWFpbCI6InBhY295eEBnbWFpbC5jb20iLCJjdnYiOiIxMTEiLCJleHBpcmF0aW9uX21vbnRoIjoiMDkiLCJleHBpcmF0aW9uX3llYXIiOiIzNSIsImlhdCI6MTcwOTI0NzYwOSwiZXhwIjoxNzA5MjQ3NjY5fQ.9BMJFG3aWgggxsSTUdOiuyu6HEZfJ4HxsbZCRoC9nSw";
    const result = await new TokenService().getdataCard(token);
    expect(result).toEqual({
      status: false,
      data: "",
      error: "expiro la data de la tarjeta",
    });
  });
});
