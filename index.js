import express from 'express';
import './database.js';
import apiRouter from './api/router.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(apiRouter);

app.listen(port, () => {
  console.log('serving on port', port);
});
