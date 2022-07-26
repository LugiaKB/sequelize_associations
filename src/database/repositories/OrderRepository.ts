import AppError from "../../utils/AppError";
import model, { OrderAttributes, OrderInput, OrderOutput } from "../models/OrderModel"

export const getAll = async (): Promise<OrderOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return order;
};

export const create = async (payload: OrderInput): Promise<OrderOutput> => {
   return await model.create(payload);
}

export const updateById = async (id: number, payload: OrderInput): Promise<OrderOutput> => {
    const order = await model.findByPk(id);

    if (!order) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return order.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const order = await model.findByPk(id)

    if (!order) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return order.destroy();
}