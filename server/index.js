const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


// Connect DB
mongoose
  .connect("mongodb://host.docker.internal:27017/testdb",{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true ,
    family: 4 
  })
  .then(() => console.log("mongoDB is connected"))
  .catch((err) => console.log(err));

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/user", require("./routes/user"));

app.listen(5000, () => console.log("Server is running on port 5000"));
