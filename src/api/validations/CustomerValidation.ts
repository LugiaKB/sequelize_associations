import { celebrate, Joi, Segments } from "celebrate";

const customerValidation = {
    customerName: Joi.string().max(50),
    contactLastName: Joi.string().max(50),
    contactFirstName: Joi.string().max(50),
    phone: Joi.string().max(50),
    addressLine1: Joi.string().max(50),
    addressLine2: Joi.string().max(50).allow('', null),
    city: Joi.string().max(50),
    state: Joi.string().max(50).allow('', null),
    postalCode: Joi.string().max(15).allow('', null),
    country: Joi.string().max(50),
    salesRepEmployeeNumber: Joi.number().integer().allow(null),
    creditLimit: Joi.number().allow(null)
};

export const CustomerCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(customerValidation)
                        .fork(Object.keys(customerValidation), (schema) => schema.required())
});

export const CustomerUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(customerValidation).min(1)
});

