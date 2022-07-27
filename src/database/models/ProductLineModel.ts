import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../sequelize';

export interface ProductLineAttributes {
    productLine: string,
    textDescription: string,
    htmlDescription: string,
    image: Blob
};

export interface ProductLineInput extends Required<ProductLineAttributes> {};
export interface ProductLineOutput extends Required<ProductLineAttributes> {};

class ProductLine extends Model<ProductLineAttributes, ProductLineInput> {
    declare productLine: string;
    declare textDescription: string;
    declare htmlDescription: string;
    declare image: Blob;
}

ProductLine.init({
    productLine: {type: DataTypes.STRING(50), allowNull: false, primaryKey: true},
    textDescription: {type: DataTypes.STRING(4000)},
    htmlDescription: {type: DataTypes.TEXT('medium')},
    image: {type: DataTypes.BLOB('medium')}

}, {
    sequelize,
    modelName: 'productLine'
});

export default ProductLine;