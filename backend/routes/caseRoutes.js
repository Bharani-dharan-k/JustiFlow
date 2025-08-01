const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { fileCase, getCasesByPetitioner } = require('../controllers/caseController');

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});
const upload = multer({ storage });

// Routes
router.post('/', upload.single('document'), fileCase);
router.get('/:petitionerId', getCasesByPetitioner);

module.exports = router;
