/**
 * MongoDB initialization script
 */

"use strict";

// Require config
const config = require("../config");

// Require dependences
const mongoClient = require("mongodb").MongoClient;
const fileSystem = require("fs");

(async function() {
  let client;
  console.log("Tryint to connect MongoDB ...");

  try {
    // Connect to database
    client = await mongoClient.connect(config.mongoURL);
    console.log("Connected successfully to server on:", config.mongoURL);
    const db = client.db(config.db);

    // Delete collection
    try {
      await db.collection(config.collectionName).drop();
      console.log(`Collection ${config.collectionName} deleted`);
    } catch (err) {
      if (err.message !== "ns not found") {
        throw err;
      }
    }

    // Read file data from config.fileData
    try {
      console.log("Reading data file from:", config.fileData);
      var jsonData = JSON.parse(
        fileSystem.readFileSync(config.fileData, "utf8")
      );
      console.log("JSON data readed successfully from file");
    } catch (err) {
      console.log("An error ocurred trying read data from file:", err);
    }

    // Create new docs in database
    try {
      console.log(`Creating new docs in ${config.collectionName} collection`);
      const fileCollectionName = Object.keys(jsonData)[0];
      await db
        .collection(config.collectionName)
        .insertMany(jsonData[fileCollectionName]);
    } catch (err) {
      console.log(
        `An error ocurred creating new docs in ${
          config.collectionName
        } collection:`,
        err
      );
    }
  } catch (err) {
    console.log("MongoDB connection error:", err);
    process.exit(1);
  }

  // Close connection
  console.log("Clossing mongoDb connection");
  client.close();
})();
