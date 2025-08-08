import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import grievanceRoutes from './routes/grievanceRoutes.js';
import enumRoutes from './routes/enumRoutes.js';

dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/api/uploads', express.static('uploads'));

app.use('/api/grievance', grievanceRoutes);
app.use('/api/enums', enumRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
