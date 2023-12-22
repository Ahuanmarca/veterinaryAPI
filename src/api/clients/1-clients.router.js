import Router from "express";
import * as controller from "./2-clients.controller.js";
import isAdmin from "../../middleware/isAdmin.js";

const router = Router();

router.get("/", isAdmin, controller.all);
router.get("/filter", controller.filter);
router.post("/", controller.create);
router.delete("/", controller.deleteClient);
router.put("/:id", controller.replace);
router.patch("/:id", controller.edit);

router.get("/document/:number", controller.getByDocument);

export default router;

// import Router from 'express';
// const router = Router();
// import db from './questions.js';
// import * as questionsController from './questions.controller.js';

// router.get('/random', questionsController.getRandom);
// router.get('/byIndex/:index', questionsController.getByIndex);

// // https://quiz-api-ofkh.onrender.com/questions/random?level=${level}&category=${category}
// // /questions/byFilter?level=easy&category=html
// router.get('/byFilter', (req, res) => {
//   const { query } = req;
//   let dbCopy = [...db];
//   const keys = Object.keys(query);
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     const value = query[key];
//     dbCopy = dbCopy.filter((question) => question[key] === value);
//   }
//   res.json(dbCopy);
// });

// router.post('', questionsController.createQuestion);

// router.delete('/:id', (req, res) => {
//   const { id } = req;
//   const index = db.findIndex((q) => q._id === id);
//   const deleted = db.splice(index, 1);
//   res.json(deleted);
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = db.findIndex((q) => q._id === id);
//   if (index === -1) {
//     res.json({ msg: 'ERROR' });
//   }
//   const { body } = req;
//   const { _id } = db[index];
//   db[index] = { ...body, _id };
//   res.json(db[index]);
// });

// router.patch('/:id', (req, res) => {
//   const { id } = req.params;
//   const index = db.findIndex((q) => q._id === id);
//   if (index === -1) {
//     res.json({ msg: 'ERROR' });
//   }
//   const { body } = req;
//   db[index] = { ...db[index], ...body, _id: db[index]._id };
//   res.json(db[index]);
// });

// export default router;
