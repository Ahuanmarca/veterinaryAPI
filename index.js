import express from 'express';
import './database.js';
import cors from "cors";
import apiRouter from './src/api/router.js';
import isLogged from "./src/middleware/isLogged.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors({ origin: true }));

// Middleware
app.use(isLogged);

app.use(apiRouter);

app.listen(port, () => {
  console.log('serving on port', port);
});
