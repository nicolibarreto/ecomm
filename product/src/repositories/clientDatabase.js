import { Sequelize } from 'sequelize';

export const client = new Sequelize('mysql://mysqluser:mysqlpass@product-database/product')

export default client;