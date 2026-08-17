import express from "express";
import authRoutes from "./routes/auth.routes.js"
require("dotenv").config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/",(req, res) => {
    res.json({
        message: "server is running"
    });
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})