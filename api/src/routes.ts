import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/sua-rota', (request: Request, response: Response) => {
  // Seu código aqui
  response.send('Hello World');
});

export default router;