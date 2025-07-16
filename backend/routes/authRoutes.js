const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { register, login } = require('../controllers/authController');
<<<<<<< HEAD

=======
const { getAllJudges, verifyJudge } = require('../controllers/adminController');
>>>>>>> main
// Upload files for both roles
const uploadFields = upload.fields([
  { name: 'lawLicense', maxCount: 1 },
  { name: 'judgeIdProof', maxCount: 1 }
]);

router.post('/register', uploadFields, register);
router.post('/login', login);
<<<<<<< HEAD
=======
router.get('/judges', getAllJudges);
router.patch('/verify-judge/:id', verifyJudge);
>>>>>>> main

module.exports = router;
