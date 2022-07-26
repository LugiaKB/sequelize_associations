import AppError from "../../utils/AppError";
import model, { ProductLineAttributes, ProductLineInput, ProductLineOutput } from "../models/ProductLineModel"

export const getAll = async (): Promise<ProductLineOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: string): Promise<ProductLineOutput> => {
    const productLine = await model.findByPk(id);

    if (!productLine) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return productLine;
};

export const create = async (payload: ProductLineInput): Promise<ProductLineOutput> => {
   return await model.create(payload);
}

export const updateById = async (id: string, payload: ProductLineInput): Promise<ProductLineOutput> => {
    const productLine = await model.findByPk(id);

    if (!productLine) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return productLine.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const productLine = await model.findByPk(id)

    if (!productLine) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return productLine.destroy();
}