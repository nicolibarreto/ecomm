import { Sequelize } from 'sequelize';

export const client = new Sequelize(process.env.DATABASE_URL)

export default client;