import { Model, DataTypes} from 'sequelize';
import { client } from '../repositories/databaseClients.js';

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
  id_usuario: DataTypes.UUID
}, {
  sequelize: client,
  modelName: 'Product',
});