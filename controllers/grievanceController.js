import Grievance from '../models/Grievance.js';

export const submitGrievance = async (req, res) => {
  try {
    const data = {
      ...req.body,
      attachment: req.file ? req.file.filename : null
    };
    const grievance = await Grievance.create(data);
    res.status(201).json(grievance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getGrievances = async (req, res) => {
  try {
    const all = await Grievance.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --- NEW FUNCTION FOR ADMIN PANEL ---
export const updateGrievanceStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Status field is required.' });
    }

    const updatedGrievance = await Grievance.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true } // 'new: true' returns the updated document
    );

    if (!updatedGrievance) {
      return res.status(404).json({ error: 'Grievance not found.' });
    }

    res.json(updatedGrievance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
