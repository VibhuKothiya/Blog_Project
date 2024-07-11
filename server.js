const http = require("http");
const express = require("express");
const dbConnect = require("./db/dbConnect");
const app = express();
require("dotenv").config()
const cors = require("cors")
const routes = require("./routes")

//cors
app.use(
    cors({
        origin: "*",
    })
);

//body
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))


//routes
app.use("/Blog", routes)

//database connect
dbConnect();


//server
app.listen(process.env.PORT,()=>{
    console.log(`server started on port no. ${process.env.PORT}`);
})