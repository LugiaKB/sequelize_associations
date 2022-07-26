import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/CustomerService"

export const getAll =  async (req: Request, res: Response) => {
    const customer = await service.getAll();
    res.send(customer);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const customer = await service.getById(parseInt(req.params.id));
    res.send(customer);
};

export const create = async (req: Request, res: Response) => {
    const customer = await service.create(req.body);
    res.status(201).send(customer);
};

export const updateById = async (req: Request, res: Response) => {
    const customer = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(customer);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};