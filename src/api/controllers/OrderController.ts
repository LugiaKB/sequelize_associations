import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/OrderService"

export const getAll =  async (req: Request, res: Response) => {
    const order = await service.getAll();
    res.send(order);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const order = await service.getById(parseInt(req.params.id));
    res.send(order);
};

export const create = async (req: Request, res: Response) => {
    const order = await service.create(req.body);
    res.status(201).send(order);
};

export const updateById = async (req: Request, res: Response) => {
    const order = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(order);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};