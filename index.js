import express from 'express';
import './database.js';
import apiRouter from './api/router.js';
import isLogged from "./middleware/isLogged.js";

const app = express();
const port = 3000;

app.use(express.json());

// Middleware
app.use(isLogged);

app.use(apiRouter);

app.listen(port, () => {
  console.log('serving on port', port);
});
