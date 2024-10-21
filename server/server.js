const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Uploads folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append timestamp to the file name
    },
});

const upload = multer({ storage });

// Create uploads directory if it doesn't exist
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Create db.json file if it doesn't exist
const dbPath = path.join(__dirname, 'data', 'db.json');
if (!fs.existsSync(dbPath)) {
    fs.writeFileSync(dbPath, JSON.stringify([])); // Create an empty array in db.json
}

// Handle POST request to /contacts
app.post('/contacts', upload.single('file'), (req, res) => {
    const contactData = {
        fullName: req.body.fullName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        company: req.body.company,
        preferredContact: req.body.preferredContact,
        projectType: req.body.projectType,
        currentWebsite: req.body.currentWebsite,
        file: req.file ? req.file.filename : null, // Save the filename if a file was uploaded
        message: req.body.message,
    };

    // Read existing data from db.json
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read db.json' });
        }

        let jsonData;
        try {
            jsonData = JSON.parse(data);
        } catch (parseError) {
            return res.status(500).json({ error: 'Invalid JSON format in db.json' });
        }

        // Ensure jsonData is an array
        if (!Array.isArray(jsonData)) {
            return res.status(500).json({ error: 'db.json does not contain a valid array' });
        }

        jsonData.push(contactData); // Add new contact data

        // Write updated data back to db.json
        fs.writeFile(dbPath, JSON.stringify(jsonData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Failed to save data to db.json' });
            }
            res.status(200).json(contactData);
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
