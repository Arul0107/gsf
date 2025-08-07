// backend/routes/enumRoutes.js
import express from 'express';
import { getGrievanceEnums, getPincodesByConstituency } from '../controllers/enumController.js';

const router = express.Router();
router.get('/dropdowns', getGrievanceEnums);
router.get('/constituency/:constituencyName', getPincodesByConstituency);

export default router;