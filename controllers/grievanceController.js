import Grievance from '../models/Grievance.js';

export const submitGrievance = async (req, res) => {
  try {
    // Log the received body and file for debugging
    console.log('Received body:', req.body);
    console.log('Received file:', req.file);
    
    // Destructure all fields, including the optional 'age' field
    const { 
      fullName, 
      age, // Now including age
      address, 
      phoneNumber, 
      constituency, 
      pincode, 
      wardNo, 
      grievanceCategory, 
      description 
    } = req.body;

    // Check for all required fields. 'age' is optional and should not be here.
    if (!fullName || !address || !phoneNumber || !constituency || !pincode || !wardNo || !grievanceCategory || !description) {
      return res.status(400).json({ error: 'All required form fields must be provided.' });
    }

    // Build the data object, handling the optional 'age' field
    const data = {
      ...req.body,
      // Only include the age field if it has a value.
      // This prevents Mongoose from trying to cast "undefined" to a Number.
      ...(age && { age: Number(age) }),
      attachment: req.file ? req.file.filename : null,
    };

    const grievance = await Grievance.create(data);
    res.status(201).json(grievance);
  } catch (err) {
    console.error('Mongoose validation or other error:', err.message);
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
      { new: true, runValidators: true }
    );

    if (!updatedGrievance) {
      return res.status(404).json({ error: 'Grievance not found.' });
    }

    res.json(updatedGrievance);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
