import { Sequelize } from 'sequelize';

export const client = new Sequelize('mysql://mysqluser:mysqlpass@db/product')