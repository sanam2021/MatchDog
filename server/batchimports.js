const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const DB_NAME = "final-project";

// Read the JSON files
const data = require("./Data/data");
const dogsdata = require ("./Data/dogsdata")
console.log(data);
console.log(dogsdata);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    console.log("Connecting to the client");
    await client.connect();
    console.log("Connected");

    const db = client.db(DB_NAME);
    console.log("Inserting data");

    // Insert userCollection data
    await db.collection("userCollection").insertMany(data.userCollection);
    console.log("Inserted userCollection data");

    // Insert profileCollection data
    await db.collection("profileCollection").insertMany(data.profileCollection);
    console.log("Inserted profileCollection data");

    // Insert dogCollection data
    await db.collection("dogCollection").insertMany(dogsdata.dogCollection);
    console.log("Inserted dogCollection data");

    // Insert conversationCollection data
    await db
      .collection("conversationCollection")
      .insertMany(data.conversationCollection);
    console.log("Inserted conversationCollection data");

    // Insert testimonialsCollection data
    await db
      .collection("testimonialsCollection")
      .insertMany(data.testimonialsCollection);
    console.log("Inserted testimonialsCollection data");

    console.log("Data insertion successful");
  } catch (err) {
    console.error(err.message);
  } finally {
    client.close();
  }
};

batchImport();
