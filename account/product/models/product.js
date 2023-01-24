import {Model, DataTypes}  from 'sequelize';
import client from "../src/repositories/clientDatabase.js";
import {ProductImage} from "../models/productimage.js";
import {ProductFeature} from "../models/productfeature.js";

export class Product extends Model {
  static associate(models) {
  }
}
Product.init({
  name: DataTypes.STRING,
  value: DataTypes.DECIMAL,
  quantity: DataTypes.INTEGER,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  id_user: DataTypes.UUID
}, 
{ sequelize: client, modelName: 'Product'}
);

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