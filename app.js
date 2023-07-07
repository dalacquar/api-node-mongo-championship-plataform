const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


const conn = require("./db/conn");
conn();

const routes = require("./routes/router")
app.use("/api", routes);

app.listen(8000, function () {
    console.log("Rodando API na porta: 127.0.0.1:8000")
})
