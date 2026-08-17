import express from "express";
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import "dotenv/config";


const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/auth", userRoutes);

app.get("/",(req, res) => {
    res.json({
        message: "Server is running"
    });
})

app.listen(3000, () => {
    console.log("server running on port 3000");
})