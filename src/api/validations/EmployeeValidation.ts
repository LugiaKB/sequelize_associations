import { celebrate, Joi, Segments } from "celebrate";

const employeeValidation = {
    lastName: Joi.string(),
    firstName: Joi.string(),
    extension: Joi.string(),
    email: Joi.string(),
    officeCode: Joi.number().integer(),
    reportsTo: Joi.number().integer().allow(null),
    jobTitle: Joi.string()
};

export const EmployeeCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(employeeValidation)
                        .fork(Object.keys(employeeValidation), (schema) => schema.required())
});

export const EmployeeUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(employeeValidation).min(1)
});

