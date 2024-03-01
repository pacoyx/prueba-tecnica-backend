import Redis from "ioredis";
import { ICard } from "../models/ICard";

// const redis = new Redis({ host: "redis-db", port: 6379 });
const redis = new Redis(6379);

export const registerCardDB = async (token: string, card: ICard) => {
  const resredis = await redis.set(token, JSON.stringify(card), "EX", 60); // Cache for 1 min
};

export const getDataCardByToken = async (token: string): Promise<ICard> => {
  const cachedData = await redis.get(token);
  return JSON.parse(cachedData);
};
