const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");
const cors = require("cors");

connectDB();

const app = express();


// Enable Cross Origin Resource Sharing (Unsafe, for development)
app.use(cors());


// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Set API Route "/api/goals" From "./routes/goalRoute"
app.use("/api/goals", require("./routes/goalRoute"));
app.use("/api/users", require("./routes/userRoute"));


// Serve frontend (Set Entry Point when in Deployment) 
if (process.env.NODE_ENV === "production") {
  // Set static folder ('build' folder)
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // Points to index.html in the frontend of build folder => the entry point
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get('/', (req, res) => res.send('Please set to Production'))
}


// Error Handler Middleware
app.use(errorHandler);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
