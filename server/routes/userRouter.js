import express from 'express';
import { userCreditData, webhook } from '../controllers/userController.js';
import userAuth from '../middlewares/auth.js';

const userRouter = express.Router();

// Define the webhook route
userRouter.post('/webhook', webhook);

userRouter.get('/credits',userAuth, userCreditData)

// Export the userRouter
export default userRouter;