import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';

export interface EmployeeAttributes {
    employeeNumber: number,
    lastName: string,
    firstName: string,
    extension: string,
    email: string,
    officeCode: number,
    reportsTo: number,
    jobTitle: string
};

export interface EmployeeInput extends Optional<EmployeeAttributes, 'employeeNumber'> {};
export interface EmployeeOutput extends Required<EmployeeAttributes> {};

class Employee extends Model<EmployeeAttributes, EmployeeInput> {
    declare employeeNumber: number;
    declare lastName: string;
    declare firstName: string;
    declare extension: string;
    declare email: string;
    declare officeCode: number;
    declare reportsTo: number;
    declare jobTitle: string;
}

Employee.init({
    employeeNumber: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lastName: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    extension: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    officeCode: {type: DataTypes.INTEGER},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: {type: DataTypes.STRING},

}, {
    sequelize,
    modelName: 'employee'
});

export default Employee;