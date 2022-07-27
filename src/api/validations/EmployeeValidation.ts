import { celebrate, Joi, Segments } from "celebrate";

const employeeValidation = {
    lastName: Joi.string().max(50),
    firstName: Joi.string().max(50),
    extension: Joi.string().max(10),
    email: Joi.string().max(100),
    officeCode: Joi.number().integer(),
    reportsTo: Joi.number().integer().allow(null),
    jobTitle: Joi.string().max(50)
};

export const EmployeeCreateValidation = celebrate({
    [Segments.BODY] : Joi.object(employeeValidation)
                        .fork(Object.keys(employeeValidation), (schema) => schema.required())
});

export const EmployeeUpdateValidation = celebrate({
    [Segments.BODY] : Joi.object(employeeValidation).min(1)
});

