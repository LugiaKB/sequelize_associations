import { celebrate, Joi, Segments } from "celebrate";

const customerValidation = {
    customerName: Joi.string(),
    contactLastName: Joi.string(),
    contactFirstName: Joi.string(),
    phone: Joi.string(),
    addressLine1: Joi.string(),
    addressLine2: Joi.string().allow('', null),
    city: Joi.string(),
    state: Joi.string().allow('', null),
    postalCode: Joi.string().allow('', null),
    country: Joi.string(),
    salesRepEmployeeNumber: Joi.number().integer().allow(null),
    creditLimit: Joi.number().allow(null),
};

export const CustomerCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(customerValidation)
                        .fork(Object.keys(customerValidation), (schema) => schema.required())
});

export const CustomerUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(customerValidation).min(1)
});

