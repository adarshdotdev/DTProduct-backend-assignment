const { MongoClient } = require("mongodb");

require("dotenv").config();

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("DTProduct");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("MongoDb connection error ", error);
  }
}

function getDB() {
  if (!db) {
    throw new Error("Database not initialized. Call connectDB first.");
  }

  return db;
}

module.exports = { connectDB, getDB };
