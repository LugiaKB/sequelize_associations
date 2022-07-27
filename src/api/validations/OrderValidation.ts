import { celebrate, Joi, Segments } from "celebrate";

const orderValidation = {
    orderDate: Joi.date(),
    requiredDate: Joi.date(),
    shippedDate: Joi.date().allow(null),
    status: Joi.string().max(15),
    comments: Joi.string().allow('', null),
    customerNumber: Joi.number().integer()
};

export const OrderCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(orderValidation)
                        .fork(Object.keys(orderValidation), (schema) => schema.required())
});

export const OrderUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(orderValidation).min(1)
});

