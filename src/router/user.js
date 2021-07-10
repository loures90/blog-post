import express from 'express';
import signupController from '../controller/user/signupController.js';
export const userRouter = express.Router();

userRouter.post('/signup', signupController)
