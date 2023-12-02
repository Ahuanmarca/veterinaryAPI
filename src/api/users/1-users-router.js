import Router from "express";
import * as controller from "./2-users-controller.js";

// 2-users-controller.js 😵‍💫
// 2-users.controller.js 😁

const router = Router();

router.get("/id/:id", controller.getById);

export default router;