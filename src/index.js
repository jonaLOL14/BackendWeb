const express = require('express');
const dbConnection = require('./config/db');
const PORT = process.env.PORT || 3001;
const clienteRoute = require('./routes/clienteroute');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
dbConnection();

app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use('/cliente', clienteRoute);

require('dotenv').config();
app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
});

