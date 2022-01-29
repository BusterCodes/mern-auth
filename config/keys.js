require("dotenv").config();

module.exports = {
  mongoURI: process.env.MONGODB_URI,
  secretOrKey: "secret",
};

// mongo "mongodb+srv://password.cluster.mongodb.net/<dbname>" --username User
