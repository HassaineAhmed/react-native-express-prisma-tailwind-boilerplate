import express from "express";
import sayHello from "./routes/sayHello.js";
const app = express();

app.use("/sayHello", sayHello);
app.listen(3000, () => console.log("listening on port 3000"));
