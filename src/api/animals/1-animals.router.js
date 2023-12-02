import Router from "express";
import * as controller from "./2-animals.controller.js";

const router = Router();

router.get('/all', controller.getAll);
router.get('/client/document/:number', controller.byClientDocument);
router.patch('/client/document/:number', controller.updateByClient);

export default router;