import { wait } from "@engine/utils";
const mongoose = require("mongoose");

// const mongoose = require("mongoose");

// const { wait } = require("../utils");

let strictQuery = false;
let isConnected = false;
let attempts = 0;

const dbName = "SunflowerApp";
// type Error = any;
console.log(
  "User:\t  ",
  process.env.MONGODB_USER,
  "\nPassword: ",
  process.env.MONGODB_PASSWORD
);

export const connectToDB = async () => {
  if (isConnected) {
    return isConnected;
  }

  try {
    if (!strictQuery) {
      mongoose.set("strictQuery");
      strictQuery = true;
    }
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
    if (attempts++ > 3) return false;
    console.log(error.message);
    return await wait(attempts).then(connectToDB);
  }
};
connectToDB();
