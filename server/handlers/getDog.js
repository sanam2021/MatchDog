const { MongoClient, ObjectId } = require("mongodb");
require("dotenv").config();


const { MONGO_URI } = process.env;
const DB_NAME = "final-project";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getDog = async (request, response) => {
  const { dogId } = request.params;

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db(DB_NAME);

    const dogProfiles = db.collection("dogProfiles");
 


    // Insert the dog profile into the collection
    const result = await dogProfiles.findOne({_id: new ObjectId (dogId)});

    // Update the user's profile with the dog ID

if(result ){
    response.status(200).json({
      status: 200,
      
      data : result,


    })} else{

      response.status(404).json({ status: 404, message:" Not Found"});
    };
  } catch (error) {
    console.error(error);
    response.status(500).json({ status: 500, message: "Server error" });
  } finally {
    client.close();
  }
};

module.exports = { getDog };
