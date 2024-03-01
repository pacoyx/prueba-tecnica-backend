import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tokenRouter from "./routes/tokenRoutes";
import { authenticateToken } from "./middleware/authToken";

dotenv.config();
const app = express();
const port = process.env.NODE_PORT || 3001;
app.use(express.json());
app.use(cors());
app.use(authenticateToken);

app.use("/tokens", tokenRouter);

app.get("/", (req, res) => {  
  res.send("Hola Culqi!");
});

app.listen(port, () => {
  return console.log(`Servidor Express corriendo en http://localhost:${port}`);
});

export default app;