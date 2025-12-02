const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
const DB_PASS = process.env.DB_PASS;
const DB_USER = process.env.DB_USER;
const port = 3000;


const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@teachers.gc04dw7.mongodb.net/?appName=Teachers`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
const database = client.db("Teachers");

app.use('/', express.static('../client/dist'));

app.get("/info", async (req, res) => {
  try {
    await client.connect();
    console.log("Connected to database");

    const chrissy = database.collection("Chris Peters");
    const results = await chrissy.find().toArray();

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({"Server Error": "Either you put in the URL wrong or Reid did something wrong, so please complain to him after making sure the username and password are correct."});
  } finally {
    await client.close();
    console.log("Database connection closed");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

