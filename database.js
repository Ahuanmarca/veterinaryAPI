import mongoose from "mongoose";
const { MONGO_URL, MONGO_DB_NAME } = process.env;
const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log("Successful connection with MongoDB");
} catch {
  console.error("ERROR!");
}
