const express = require("express");
const morgan = require("morgan");

const { getUser } = require("./handlers/getUser");
const {getUsers} = require("./handlers/getUsers")

const { getProfile } = require("./handlers/getProfile");
const { createDogProfile } = require("./handlers/createDogProfile");
const loginOrSignup = require("./handlers/loginOrSignup");
const { getDogs } = require("./handlers/getDogs");
const { getDog} = require("./handlers/getDog");
const { deleteDogs } = require("./handlers/deleteDogs");
const { updateDogs } = require("./handlers/updateDogs");
// const { getDog } = require("./handlers/dogHandler");
// const { getConversation } = require("./handlers/conversationHandler");
// const { getTestimonial } = require("./handlers/testimonialHandler");

const PORT = 8000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))

  // REST endpoints

  // Get user by ID
  .get("/api/user/:userId", getUser)

  // Get all users
  .get("/api/users", getUsers)

  // // Get profile by ID
  .get("/api/profile/:profileId", getProfile)
  // POST endpoint for creating a dog profile
  .post("/api/dog-profile", createDogProfile)
  //POST Login-signup
  .post("/api/login-or-signup", loginOrSignup)
  // Get dogs by ID
  .get("/api/dogs", getDogs)

  
  // getdogId
  .get(`/api/dogs/:dogId`, getDog)
  //deleteDogs
  .delete("/api/my-dogs/:dogId/:userId", deleteDogs)
  // update Dogs info
  .put("/api/dogs/:dogId", updateDogs)
  // // Get conversation by ID
  // .get("/api/conversation/:conversationId", getConversation)

  // // Get testimonial by ID
  // .get("/api/testimonial/:testimonialId", getTestimonial)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));

// const express = require("express");
// const morgan = require("morgan");
// const app = express();
// const port = 8000;

// app.use(morgan ("tiny"))

// app.get("/home", (req, res) => {
//   res.json("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
