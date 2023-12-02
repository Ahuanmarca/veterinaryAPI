import Router from "express";
import clientsRouter from "./clients/1-clients.router.js";
import animalsRouter from "./animals/1-animals.router.js";
import usersRouter from "./users/1-users-router.js";
import authRouter from "./auth/1-auth-router.js";

const router = Router();

router.use("/clients", clientsRouter);
router.use("/animals", animalsRouter);
router.use("/users", usersRouter);

router.use("/auth", authRouter);

export default router;
