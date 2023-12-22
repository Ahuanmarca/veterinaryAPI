import express from "express";
import "./environment.js";
import "./database.js";
import cors from "cors";
import apiRouter from "./src/api/router.js";
import isLogged from "./src/middleware/isLogged.js";

const app = express();
const { PORT } = process.env;

app.use(express.json());
app.use(cors({ origin: true }));
app.use(isLogged);
app.use(apiRouter);

app.listen(PORT, () => {
  console.log("serving on PORT", PORT);
});
