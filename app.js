import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";

const app = express();
app.use(express.json());
app.use("/api/user", router); //to get user using path /api/user
app.use("/api/blog", blogRouter);
mongoose
    .connect(
    "mongodb+srv://admin:GhO5xPYLLTI63KAH@cluster0.27nseph.mongodb.net/Blog?retryWrites=true&w=majority"
    )
    .then(() => app.listen(5000))
    .then(() =>
    console.log("Conected to database and listening to localhost:5000")
    )
    .catch((err) => console.log(err));