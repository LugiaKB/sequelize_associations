import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';
import Employee from './EmployeeModel';

export interface OfficeAttributes {
    officeCode: number;
    city: string;
    phone: string;
    addressLine1: string;
    addressLine2: string;
    state: string;
    country: string;
    postalCode: string;
    territory: string;
}

export interface OfficeInput extends Optional<OfficeAttributes, 'officeCode'> {};
export interface OfficeOutput extends Required<OfficeAttributes> {};

class Office extends Model<OfficeAttributes, OfficeInput> {
    declare officeCode: number;
    declare city: string;
    declare phone: string;
    declare addressLine1: string;
    declare addressLine2: string;
    declare state: string;
    declare country: string;
    declare postalCode: string;
    declare territory: string;
}

Office.init({
    officeCode: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    city: {type: DataTypes.STRING(50), allowNull: false},
    phone: {type: DataTypes.STRING(50), allowNull: false},
    addressLine1: {type: DataTypes.STRING(50), allowNull: false},
    addressLine2: {type: DataTypes.STRING(50)},
    state: {type: DataTypes.STRING(50)},
    country: {type: DataTypes.STRING(50), allowNull: false},
    postalCode: {type: DataTypes.STRING(15), allowNull: false},
    territory: {type: DataTypes.STRING(10)},

}, {
    sequelize,
    modelName: 'office'
});

export default Office;