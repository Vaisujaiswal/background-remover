import express from 'express';
import { removeBgImage } from '../controllers/imageController.js';
import upload from '../middlewares/multer.js';
import userAuth from '../middlewares/auth.js';

const imageRouter = express.Router();

// Route to handle background removal
imageRouter.post('/remove-bg', upload.single('image'), userAuth, removeBgImage);

export default imageRouter;