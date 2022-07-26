import * as repository from "../database/repositories/CustomerRepository"
import { CustomerInput, CustomerOutput } from "../database/models/CustomerModel";

export const getAll = async (): Promise<CustomerOutput[]> => {
    return await repository.getAll();
};

export const getById = async (id: number): Promise<CustomerOutput> => {
    return await repository.getById(id);
}

export const create = async (payload: CustomerInput) => {
    return await repository.create(payload);
}

export const updateById = async (id: number, payload: CustomerInput): Promise<CustomerOutput> => {
    return await repository.updateById(id, payload);
}

export const deleteById = async (id: number): Promise<void> => {
    return await repository.deleteById(id);
}