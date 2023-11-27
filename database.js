import mongoose from 'mongoose';
const MONGO_URL =
  'mongodb+srv://renzobelon:admin@cluster0.agndzxp.mongodb.net/';
const MONGO_DB_NAME = 'veterinaryDB';
const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('Successful connection with MongoDB');
} catch {
  console.error('ERROR!');
}

// const connection = await mongoose.connect(MONGO_URL, configDb);
// if (connection) {
//   console.log('Successful connection with MongoDB')
// } else {
//   console.error('ERROR!')
// }
