import { MongoClient, ObjectId } from 'mongodb';

async function getUsersCollection() {
    const connectionURL = 'mongodb://admin:pass@account-database:27017'
    const connection = new MongoClient(connectionURL);
    await connection.connect();
    const database = connection.db('accounts')
    return database.collection('users');
}

export async function saveAccount(account) {
    const usercollection = await getUsersCollection();
    await usercollection.insertOne(account);
    
}

 export async function findAccount(_id) {
    const usercollection = await getUsersCollection();
    const  dbResult = await usercollection.findOne({
        "_id": ObjectId(_id)
    })
    
    return dbResult;
 }

export async function deleteOne (_id){
    const usercollection = await getUsersCollection();
    const deleteOne = await usercollection.deleteOne({
        "_id": ObjectId(_id)
    })
    
    return deleteOne; 
}

export async function findAccountByEmail(email) {
    const usercollection = await getUsersCollection();
    const  dbResult = await usercollection.findOne({
       email
    })
    
    return dbResult;
 }