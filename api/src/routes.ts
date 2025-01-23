import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/teste', (request: Request, response: Response) => {
  response.send('Hello World');
});

export default router;