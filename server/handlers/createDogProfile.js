 const { MongoClient , ObjectId} = require("mongodb");




require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const createDogProfile = async (request, response) => {
  const client = new MongoClient(MONGO_URI, options);
console.log(client);
  try {
    await client.connect();
    const db = client.db("final-project");
    console.log("Connected!");

    // dog profiles collection in  database
    const dogProfiles = db.collection("dogProfiles");

    // Get the dog profile data from the request body
    const dogProfileData = request.body;

    // Insert the dog profile into the collection
    const result = await dogProfiles.insertOne(dogProfileData);
    console.log(dogProfileData);

const foundProfile = await db.collection("profileCollection").findOne({ _id: new ObjectId(dogProfileData.userId )})
  console.log(foundProfile);


console.log(dogProfileData);
const updatedProfile = await db
  .collection("profileCollection")
  
  .updateOne(
    { _id: new ObjectId(dogProfileData.userId)},
    { $push: { dogs: result.insertedId } },

  );
  console.log(updatedProfile);

if (updatedProfile.modifiedCount ) {
  response.status(201).json({
    status: 201,
    message: "Dog profile created",
    _id: result.insertedId,
  });
} else {
  response
    .status(400)
    .json({ status: 400, message: "Failed to create dog profile" });
}


  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: "Server error" });
  } finally {
    client.close();
    console.log("Disconnected!");
  }
};

module.exports = { createDogProfile };
