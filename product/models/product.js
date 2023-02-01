import {Model, DataTypes}  from 'sequelize'
import client from '../src/repositories/clientDatabase.js';
import { ProductFeature } from './productfeature.js';
import { ProductImage } from './productimage.js';
export class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    value: DataTypes.DECIMAL,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    category: DataTypes.STRING,
    id_user: DataTypes.UUID
  }, {
    sequelize: client,
    modelName: 'Product',
  });
  Product.ProductImage = Product.hasMany(ProductImage, {
    foreignKey: 'product_id',
    as: 'images'
  });
  Product.ProductFeature = Product.hasMany(ProductFeature, {
    foreignKey: 'product_id',
    as: 'features'
  });
  ProductFeature.belongsTo(Product, {
    foreignKey: 'id',
  });
  ProductImage.belongsTo(Product, {
    foreignKey: 'id',
  });