import { celebrate, Joi, Segments } from "celebrate";

const officeValidation = {
    city: Joi.string().max(50),
    phone: Joi.string().max(50),
    addressLine1: Joi.string().max(50),
    addressLine2: Joi.string().max(50).allow('', null),
    state: Joi.string().max(50).allow('', null),
    country: Joi.string().max(50),
    postalCode: Joi.string().max(15),
    territory: Joi.string().max(10),
};

export const OfficeCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation)
                        .fork(Object.keys(officeValidation), (schema) => schema.required())
});

export const OfficeUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation).min(1)
});

