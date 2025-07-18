import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';

const port = process.env.PORT || 3000;
const app = express();


// middleware
app.use(cors()); // enable CORS
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// MongoDB Connection & Server Listener
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