import express from 'express';
import signupController from '../controller/user/signupController.js';
import loginController from '../controller/user/loginController.js';
export const userRouter = express.Router();

userRouter.post('/signup', signupController)
userRouter.post('/login', loginController)

