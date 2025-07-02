const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.static('uploads'));

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Upload route
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ message: 'Uploaded', filename: req.file.filename });
});

// Get list of uploaded images
app.get('/images', (req, res) => {
  fs.readdir('uploads', (err, files) => {
    if (err) return res.status(500).json({ error: 'Unable to read directory' });
    const fileUrls = files.map(file => `http://localhost:${PORT}/${file}`);
    res.json(fileUrls);
  });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
