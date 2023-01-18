import { MongoClient } from 'mongodb';

async function getUsersCollection() {
    const connectionURL = 'mongodb://admin:pass@account-database:27017'
    const connection = new MongoClient(connectionURL);
    await connection.connect();
    const database = connection.db('accounts')
    return database.collection('users');
}

export async function saveAccount(account) {
    const usercollection = await getUsersCollection(client);
    await usercollection.insertOne(account);
    await client.close();

}