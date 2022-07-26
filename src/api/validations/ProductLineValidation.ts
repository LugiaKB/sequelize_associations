import { celebrate, Joi, Segments } from "celebrate";

const productLineValidation = {
    productLine: Joi.string(),
    textDescription: Joi.string(),
    htmlDescription: Joi.string().allow('', null),
    image: Joi.string().allow('', null)
};

export const ProductLineCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(productLineValidation)
                        .fork(Object.keys(productLineValidation), (schema) => schema.required())
});

export const ProductLineUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(productLineValidation).min(1)
});

