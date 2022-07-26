import express, { Express, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';
import 'express-async-errors';
import {errors} from 'celebrate';

import sequelize from './database/sequelize';
import routes from './api/routes';
import AppError from './utils/AppError';

const app: Express = express();
const port: number = 3000;

app.use(bodyParser.json());

app.use("/api/v1/", routes);

app.use(errors());

app.use((err: AppError, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    try {
        res.status(err.getHttpCode()).send(err.getError());   
    } catch (error) {
        const internal = new AppError("Erro interno do servidor", 500, "InternalServerError");
        res.status(internal.getHttpCode()).send(internal.getError()); 
    }
});

app.get('/', (req: Request, res: Response) => {
    res.send('Hello');
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});

sequelize();