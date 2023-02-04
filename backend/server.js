const express = require("express");
const colors = require('colors')
const dotenv = require("dotenv").config();
const connectDB = require('./config/db')
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000;

connectDB()

const app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set API Route "/api/goals" From "./routes/goalRoute"
app.use('/api/goals', require('./routes/goalRoute'))

// Use error handler
app.use(errorHandler)




app.listen(port, () => console.log(`Server started on ${port}`));
