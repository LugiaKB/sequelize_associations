import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';
import Office from './OfficeModel'

export interface EmployeeAttributes {
    employeeNumber: number,
    lastName: string,
    firstName: string,
    extension: string,
    email: string,
    officeCode: number,
    reportsTo?: number,
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
    lastName: {type: DataTypes.STRING(50), allowNull: false},
    firstName: {type: DataTypes.STRING(50), allowNull: false},
    extension: {type: DataTypes.STRING(10), allowNull: false},
    email: {type: DataTypes.STRING(100), allowNull: false},
    officeCode: {type: DataTypes.INTEGER, allowNull: false},
    reportsTo: {type: DataTypes.INTEGER},
    jobTitle: {type: DataTypes.STRING(50), allowNull: false},

}, {
    sequelize,
    modelName: 'employee'
});

Office.hasMany(Employee, {
    foreignKey: 'officeCode'
});

Employee.hasOne(Office, {
    foreignKey: 'officeCode'
});

Employee.hasOne(Employee, {
    foreignKey: 'reportsTo',
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL'
});

export default Employee;