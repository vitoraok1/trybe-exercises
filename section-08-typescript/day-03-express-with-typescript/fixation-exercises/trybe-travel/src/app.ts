import express, { Request, Response } from 'express';
import packagesRouter from './routers/package.router';
import loginRouter from './routers/login.router';
import authMiddleware from './middlewares/auth.middleware';
import usersRouter from './routers/user.router';

const app = express();

app.use(express.json());
app.use(loginRouter);
app.use(authMiddleware);
app.use(packagesRouter);
app.use(usersRouter);

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Aplicação está funcionando!');
});

export default app;
