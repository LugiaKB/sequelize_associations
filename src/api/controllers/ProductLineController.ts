import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/ProductLineService"

export const getAll =  async (req: Request, res: Response) => {
    const productLine = await service.getAll();
    res.send(productLine);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const productLine = await service.getById(req.params.id);
    res.send(productLine);
};

export const create = async (req: Request, res: Response) => {
    const productLine = await service.create(req.body);
    res.status(201).send(productLine);
};

export const updateById = async (req: Request, res: Response) => {
    const productLine = await service.updateById(req.params.id, req.body);
    res.status(201).send(productLine);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};