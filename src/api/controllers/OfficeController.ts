import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/OfficeService"

export const getAll =  async (req: Request, res: Response) => {
    const office = await service.getAll();
    res.send(office);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const office = await service.getById(parseInt(req.params.id));
    res.send(office);
};

export const create = async (req: Request, res: Response) => {
    const office = await service.create(req.body);
    res.status(201).send(office);
};

export const updateById = async (req: Request, res: Response) => {
    const office = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(office);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};