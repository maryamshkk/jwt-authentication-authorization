import express from "express";
import authenticate from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/profile", authenticate, (req,res)=>{
    res.status(200).json({
        message: "You accessed a protected route",
        user: req.user
    });
})

export default router;