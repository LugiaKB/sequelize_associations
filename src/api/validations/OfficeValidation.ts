import { celebrate, Joi, Segments } from "celebrate";

const officeValidation = {
    city: Joi.string(),
    phone: Joi.string(),
    addressLine1: Joi.string(),
    addressLine2: Joi.string().allow('', null),
    state: Joi.string().allow('', null),
    country: Joi.string(),
    postalCode: Joi.string(),
    territory: Joi.string(),
};

export const OfficeCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation)
                        .fork(Object.keys(officeValidation), (schema) => schema.required())
});

export const OfficeUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(officeValidation).min(1)
});

