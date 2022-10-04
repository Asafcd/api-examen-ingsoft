const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

//Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", require("./routes/index"));

// Connect to the MongoDB cluster

  mongoose.connect(
    "mongodb://127.0.0.1:27017",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if(err) console.log(err) 
      else console.log("mongdb is connected");
     }
  );


//Iniciando el servidor
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
