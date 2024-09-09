import express from "express";
import UserController from "./user.controller.js";

const app = express();
const port = 3000

app.use(express.json({limit:"200mb"}));

app.get("/healthCheck", (req, res)=>{
    res.status(200).send("Server is still running")
})

app.get("/data/:id_test", (req, res)=>{
    const id_test = req.params.id_test
    console.log("id_test:", id_test)
    console.log("req.query:", req.query)
    res.status(200).send("Data received")
})

app.post("/createUser", UserController.createUser)

app.listen(port, () => {
    console.log("Server is running on port:", port);
})