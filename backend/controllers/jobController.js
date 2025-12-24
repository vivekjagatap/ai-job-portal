// backend/controllers/jobController.js

export const createJob = async (req, res) => {
  try {
    res.status(201).json({ message: "Job created (test)" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getJobs = async (req, res) => {
  try {
    res.json({ message: "Jobs fetched (test)" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
