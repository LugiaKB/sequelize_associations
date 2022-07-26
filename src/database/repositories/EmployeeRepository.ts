import AppError from "../../utils/AppError";
import model, { EmployeeAttributes, EmployeeInput, EmployeeOutput } from "../models/EmployeeModel"

export const getAll = async (): Promise<EmployeeOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<EmployeeOutput> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return employee;
};

export const create = async (payload: EmployeeInput): Promise<EmployeeOutput> => {
   return await model.create(payload);
}

export const updateById = async (id: number, payload: EmployeeInput): Promise<EmployeeOutput> => {
    const employee = await model.findByPk(id);

    if (!employee) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return employee.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const employee = await model.findByPk(id)

    if (!employee) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return employee.destroy();
}