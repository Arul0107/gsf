import express from 'express';
import multer from 'multer';
import { submitGrievance, getGrievances, updateGrievanceStatus } from '../controllers/grievanceController.js';

const upload = multer({ dest: 'uploads/', limits: { fileSize: 2 * 1024 * 1024 } });
const router = express.Router();

router.post('/submit', upload.single('attachment'), submitGrievance);
router.get('/all', getGrievances);

// --- NEW ROUTE FOR ADMIN PANEL ---
router.put('/:id', updateGrievanceStatus);

export default router;
