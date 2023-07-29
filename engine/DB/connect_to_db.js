require("dotenv/config");
import { wait } from "@engine/utils";
import mongoose from "mongoose";

// const mongoose = require("mongoose");

// const { wait } = require("../utils");

let isConnected = false;
mongoose.set("strictQuery");
let attempts = 0;

const dbName = "SunflowerApp";
// type Error = any;
console.log(process.env.MONGODB_USER, "\n", process.env.MONGODB_PASSWORD);

export const connectToDB = async () => {
  if (isConnected) {
    return isConnected;
  }
  try {
    const connectionString = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@olivineschool000.jerpqjx.mongodb.net`;
    console.log(`mongoDB connection string: ${connectionString}`);

    await mongoose.connect(connectionString, {
      dbName,
      w: "majority",
      retryWrites: true,
      retryReads: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
    return isConnected;
  } catch (error) {
    if (attempts++ > 3) process.exit(1);
    console.log(error.message);
    return await wait(attempts).then(connectToDB);
  }
};
connectToDB();
