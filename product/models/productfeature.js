import {Model, DataTypes}  from 'sequelize'
import { client } from '../src/repositories/clientDatabase.js';


export class ProductFeature extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductFeature.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize: client,
    modelName: 'ProductFeature',
  });