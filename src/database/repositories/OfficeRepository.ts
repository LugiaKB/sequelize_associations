import AppError from "../../utils/AppError";
import model, { OfficeAttributes, OfficeInput, OfficeOutput } from "../models/OfficeModel"

export const getAll = async (): Promise<OfficeOutput[]> => {
    return await model.findAll();
};

export const getById = async (id: number): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return office;
};

export const create = async (payload: OfficeInput): Promise<OfficeOutput> => {
   return await model.create(payload);
}

export const updateById = async (id: number, payload: OfficeInput): Promise<OfficeOutput> => {
    const office = await model.findByPk(id);

    if (!office) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return office.update(payload);
}

export const deleteById = async (id: number): Promise<void> => {
    const office = await model.findByPk(id)

    if (!office) {
        throw new AppError("Registro não encontrado", 404, "NotFoundError");
    }

    return office.destroy();
}