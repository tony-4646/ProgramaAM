const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const paisesRoutes = require("./routers/paises.routes");
app.use ("/api/paises", paisesRoutes);
const PORT = 3000;
app.listen(PORT,()=>{
    console.log("server is running on port", PORT);
})