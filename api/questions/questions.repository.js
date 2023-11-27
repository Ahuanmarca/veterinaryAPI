import db from './questions.js';

function getByIndex({ index }) {
  return db[index];
}

function getLength() {
  return db.length;
}

function createQuestion({ question }) {
  const newId = String(Number(db.at(-1)._id) + 1);
  db.push({ ...question, _id: newId });
  return db.at(-1);
}

export { getByIndex, getLength, createQuestion };
