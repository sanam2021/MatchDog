const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const loginOrSignup = async (req, res) => {
  const user = req.body;
  

  const client = new MongoClient(MONGO_URI, options);

  try {
    await client.connect();
    const db = client.db("final-project");

    //  users collection and profile collection in database
    const users = db.collection("userCollection");
    const profiles = db.collection("profileCollection");

    // Check if the user already exists in the database
    const existingUser = await users.findOne({ email: user.email });

    if (existingUser) {
      // User already exists
      console.log("User logged in:", existingUser);

      const profile = await profiles.findOne({ _id: existingUser.profile });

      // Example response data with profile
      res.status(200).json({ profile });
    } else {
    

      // Create a new profile document in the profile collection
      const newProfile = {
        name: user.name,
        contactInfo: {email: user.email},
        dogs: [],
        messages: [],
      };
      console.log(newProfile); 
      const profileResult = await profiles.insertOne(newProfile);
console.log(profileResult);
      if (profileResult.insertedId) {
        // New profile created successfully
        console.log("New profile created:", newProfile);

        // Create a new user document and associate it with the profile ID
        const newUser = {
          email: user.email,
          profile: profileResult.insertedId,
        };
        const userResult = await users.insertOne(newUser);
console.log(userResult);
        if (userResult.insertedId) {
          // User registered successfully
          console.log("User registered:", newUser);

          // Example response data with profile
           newProfile._id = profileResult.insertedId,
           
        
          

          res.status(200).json({ profile:newProfile });
        } else {
          // Failed to register user
          res.status(500).json({ error: "Failed to register user" });
        }
      } else {
        // Failed to create new profile
        res.status(500).json({ error: "Failed to create new profile" });
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Server error" });
  } finally {
    client.close();
  }
};

module.exports = loginOrSignup;
