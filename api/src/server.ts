import express, { NextFunction, Request, Response } from 'express';
import router from './routes';
import "express-async-errors";

const app = express();

app.use('/api', router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    console.error(err.stack);
    response.status(500).send('Algo deu errado!');
  });


app.listen(3000, () => {
  console.log('Funfo essa porra!')
});