import express from 'express';
import { webhook } from '../controllers/userController.js';

const userRouter = express.Router();

// Define the webhook route
userRouter.post('/webhook', webhook);

// Export the userRouter
export default userRouter;