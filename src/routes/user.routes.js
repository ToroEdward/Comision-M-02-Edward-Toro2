import { Router } from "express";
import { ctrlCreateUser, ctrlLoginUser } from "../controllers/user.controllers.js";
import { loginUserValidations, createUserValidations } from '../models/validations/user.validations.js';

const usersRouter = Router();

usersRouter.post("/register", createUserValidations, ctrlCreateUser);
usersRouter.post("/login", loginUserValidations, ctrlLoginUser);

export { usersRouter };