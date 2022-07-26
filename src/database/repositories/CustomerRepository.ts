import AppError from "../../utils/AppError";
import model, { CustomerAttributes, CustomerInput, CustomerOutput } from "../models/CustomerModel"

export const getAll = async (): Promise<CustomerOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return customer;
};

export const create = async (payload: CustomerInput): Promise<CustomerOutput> => {
   return await model.create(payload);
}

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    const customer = await model.findByPk(id);

    if (!customer) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return customer.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const customer = await model.findByPk(id)

    if (!customer) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return customer.destroy();
}