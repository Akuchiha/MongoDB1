const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'test';
const collectionName = 'DATA';

const client = new MongoClient(url);

async function fetchData() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    const documents = await collection.find({}).toArray();
    console.log("Fetched documents:", documents);
  } catch (error) {
    console.error('Error fetching data:', error);
  } finally {
    await client.close();
  }
}

fetchData();