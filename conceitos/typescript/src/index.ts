import express from "express";
import UserData from "./routes"

const app = express();

app.get("/", UserData);

app.listen(3333);
