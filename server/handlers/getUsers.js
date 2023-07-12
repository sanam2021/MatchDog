const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getUsers = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("final-project");
    console.log("Connected!");

    const result = await db.collection("userCollection").find().toArray();
    response
      .status(200)
      .json({ status: 200, data: result, message: "User list" });
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: "Server error" });
  } finally {
    client.close();
    console.log("Disconnected!");
  }
};

module.exports = { getUsers };
