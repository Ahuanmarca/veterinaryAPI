import Router from 'express';
// import questionsRouter from './questions/questions.router.js';
import clientsRouter from './clients/1-clients.router.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('🌎');
});

router.use('/clients', clientsRouter);

export default router;
