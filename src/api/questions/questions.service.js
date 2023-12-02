import * as questionsRepository from './questions.repository.js';
// import db from './questions.js';

function getRandom() {
  const index = Math.floor(Math.random() * questionsRepository.getLength());
  // const question = db[index];
  const question = questionsRepository.getByIndex({ index });
  return question;
}

function getByIndex({ index }) {
  return questionsRepository.getByIndex({ index });
}

function getLength() {
  return questionsRepository.getLength();
}

function createQuestion({ question }) {
  return questionsRepository.createQuestion({ question });
}
// const { getLength } = questionsRepository;

export { getRandom, getByIndex, getLength, createQuestion };
