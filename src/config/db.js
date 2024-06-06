const mongoose = require('mongoose');

const URI = "mongodb+srv://beljona27:7oHRPwPC2daqcaHQ@proyectofinal.wdun4by.mongodb.net/?retryWrites=true&w=majority&appName=ProyectoFinal";
const dbConnection = async () => {
    console.log('Intentando conectar a MongoDB...');
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        process.exit(1);
    }
}

module.exports = dbConnection;
