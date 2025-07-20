import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRouter.js';
import bodyParser from 'body-parser';
import { webhook } from './controllers/userController.js';

const port = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// webhook route (must be above router)
app.post('/api/user/webhook', bodyParser.raw({ type: 'application/json' }), webhook);

// user routes (future expansion)
app.use('/api/user', userRouter);

// base route
app.get('/', (req, res) => {
  res.send('🟢 Backend Running');
});

// connect to DB & start server
(async () => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`✅ Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ Error starting server:', error);
  }
})();

export default app;
