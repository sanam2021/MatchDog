const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;
const DB_NAME = "final-project";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const deleteDogs = async (request, response) => {
  const { dogId, userId } = request.params;

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    const dogProfiles = db.collection("dogProfiles");
    const profileCollection = db.collection("profileCollection");

    // Remove the dog ID from the user's dogs array
    await profileCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $pull: { dogs: new ObjectId(dogId) } }
    );

    // Delete the dog from the dogProfiles collection
    const deleteResult = await dogProfiles.deleteOne({
      _id: new ObjectId(dogId),
    });

    // Delete the user from the profileCollection
    // const userDeleteResult = await profileCollection.deleteOne({
    //   _id: new ObjectId(userId),
    // });

    if (deleteResult.deletedCount > 0) {
      response
        .status(200)
        .json({ status: 200, message: "Dog and user deleted" });
    } else {
      response
        .status(404)
        .json({ status: 404, message: "Dog or user not found" });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: "Server error" });
  } finally {
    client.close();
  }
};

module.exports = { deleteDogs };
