import dotenv from 'dotenv';
dotenv.config();
import { router } from "./routes/tinyLinkRoutes"
import express from 'express';
import cors from 'cors';
import { connectDB } from './config/dbConfig';

// Connect to the database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/tinyLink",router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

