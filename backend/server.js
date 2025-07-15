const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const caseRoutes = require('./routes/caseRoutes');
const path = require('path');

dotenv.config();
connectDB();

const app = express();
app.use(cors());

// ✅ Add this to serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Only for JSON (keep this)
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/cases', caseRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('JustiFlow Backend Running...');
});

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
