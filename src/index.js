const express = require('express');
const dbConnection = require('./config/db');
const clienteRoute = require('./routes/clienteroute');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

require('dotenv').config();

// Connect to the database
dbConnection();


app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use('/cliente', clienteRoute);

app.listen(PORT, () => {    
    console.log(`Server running on port ${PORT}`);
});

