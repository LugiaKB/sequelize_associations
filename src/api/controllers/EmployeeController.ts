import {NextFunction, Request, Response, Router} from 'express';
import * as service from "../../services/EmployeeService"

export const getAll =  async (req: Request, res: Response) => {
    const employee = await service.getAll();
    res.send(employee);
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
    const employee = await service.getById(parseInt(req.params.id));
    res.send(employee);
};

export const create = async (req: Request, res: Response) => {
    const employee = await service.create(req.body);
    res.status(201).send(employee);
};

export const updateById = async (req: Request, res: Response) => {
    const employee = await service.updateById(parseInt(req.params.id), req.body);
    res.status(201).send(employee);
};

export const deleteById = async (req: Request, res: Response) => {
    service.deleteById(parseInt(req.params.id));
    res.status(204).send();
};