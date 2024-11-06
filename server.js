const express = require('express');
const cors = require('cors');
require('dotenv').config();

const portingRoutes = require('./routes/portingRoutes');
const didRoutes = require('./routes/didRoutes');

const app = express();
app.use(cors());
app.use(express.json());
// Use route modules
app.use('/api/porting', portingRoutes);
app.use('/api/did', didRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
