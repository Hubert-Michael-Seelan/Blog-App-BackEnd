const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

//router import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");

//mongodb connection
connectDB();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// Port
const PORT = 4000;
//listen
app.listen(PORT,(error)=>{
  if(!error){
    console.log("Server is Running on Port "+PORT)
  }else{
    console.log("Error: "+error)
  }
})
app.get("/",(req, res)=>{
  res.send("Express App is Running")
})

