import express from "express";
import cors from "cors";
import userRoutes from "./Routes/UserRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);

const PORT = process.env.PORT || 9090;

app.listen(PORT, () => {
  console.log(`Servidor rodando no endereço https://localhost:${PORT}`);
});
