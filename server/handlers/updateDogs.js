const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const DB_NAME = "final-project";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const updateDogs = async (request, response) => {
  const { dogId } = request.params;
  const { name, breed, bio } = request.body;

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    const dogProfiles = db.collection("dogProfiles");

    const updateData = {
      name,
      breed,
      bio,
    };

    const result = await dogProfiles.updateOne(
      { _id: new ObjectId(dogId) },
      { $set: updateData }
    );

    if (result.modifiedCount ) {
      response.status(200).json({ status: 200, message: "Dog updated" });
    } else {
      response.status(404).json({ status: 404, message: "Dog not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: "Server error" });
  } finally {
    client.close();
  }
};

module.exports = { updateDogs };
