import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';

export interface OrderAttributes {
    orderNumber: number,
    orderDate: Date,
    requiredDate: Date,
    shippedDate: Date,
    status: string,
    comments: string,
    customerNumber: number
};

export interface OrderInput extends Optional<OrderAttributes, 'orderNumber'> {};
export interface OrderOutput extends Required<OrderAttributes> {};

class Order extends Model<OrderAttributes, OrderInput> {
    declare orderNumber: number;
    declare orderDate: Date;
    declare requiredDate: Date;
    declare shippedDate: Date;
    declare status: string;
    declare comments: string;
    declare customerNumber: number
}

Order.init({
    orderNumber: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    orderDate: {type: DataTypes.DATE, allowNull: false},
    requiredDate: {type: DataTypes.DATE, allowNull: false},
    shippedDate: {type: DataTypes.DATE},
    status: {type: DataTypes.STRING(15), allowNull: false},
    comments: {type: DataTypes.STRING},
    customerNumber: {type: DataTypes.INTEGER, allowNull: false},

}, {
    sequelize,
    modelName: 'order'
});

export default Order;