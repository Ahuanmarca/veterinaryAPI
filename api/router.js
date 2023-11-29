import Router from 'express';
// import questionsRouter from './questions/questions.router.js';
import clientsRouter from './clients/1-clients.router.js';
import animalsRouter from './animals/1-animals.router.js';

const router = Router();

router.use('/clients', clientsRouter);
router.use('/animals', animalsRouter);

export default router;
