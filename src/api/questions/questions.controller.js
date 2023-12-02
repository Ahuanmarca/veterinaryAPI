import * as questionsService from './questions.service.js';
import db from './questions.js';

function getRandom(req, res) {
  const question = questionsService.getRandom();
  res.json(question);
}

function getByIndex(req, res) {
  const { index } = req.params;
  const indexAsInt = Number(index);
  if (Number.isNaN(indexAsInt)) {
    res.json({ error: 'Index is not a number' });
  }
  const question = questionsService.getByIndex({ index: indexAsInt });
  if (!question) {
    res.json({ error: 'The 🌎 ended! @#$%' });
  }
  res.json(question);
}

function createQuestion(req, res) {
  const { body } = req;
  const createdQuestion = questionsService.createQuestion({ question: body });
  if (true) {
    return res.json(createdQuestion);
  }
  return res.json(createdQuestion);
}

export { getRandom, getByIndex, createQuestion };
