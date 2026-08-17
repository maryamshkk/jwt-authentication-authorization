// register route 
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; 
import prisma from "../lib/prisma.js";

const router = express.Router();

// register api 
router.post("/register", async(req, res) => {
    try{ 
        const {name, email, password} = req.body;

        // 1. check required feilds

        if(!name || !email || !password){
            return res.status(400).json({
                message: "Name, email and password are required"
            })
        }

        // 2. check if email already existes
        const existingUser = await prisma.user.findUnique({
            where : {
                email:email
            }
        })

        if(existingUser){
            return res.status(400).json({
                message: "email already exists"
            });
        }

        // 3. Hash Password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. create user
        const user = await prisma.user.create({
            data: {name:name, 
            email:email, 
            password:hashedPassword
            }
        })

        // 5. send response
        res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })
    }
    catch(error){
        console.error(error)

        res.status(500).json({
            message: "something went wrong"
        })
    }
})

// Login api 
router.post("/login", async(req,res)=>{
    try{
        const { email, password } = req.body;

        // 1. check if both feilds are entered 
        if(!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            })
        }

        // 2. Find user
        const user = await prisma.user.findUnique({
            where: {
                email:email
            }
        })

        // 3. check user
        if(!user) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }

        // 4. check password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );
        if(!isPasswordCorrect){
            return res.status(401).json({
                message: "Password is incorrect"
            })
        }

        // 6. generate jwt
        const token = jwt.sign(
            {
            usrerId : user.id,
            role : user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: process.env.JWT_EXPIRES_IN
            }
        )

        // 7. SEND RESPONSE
        res.status(201).json({
            message: "Login Successful",
            token: token
        })
    }
    catch(error){
        console.log(error);

        res.status(500).json({
            message: "Something went wrong"
        })
    }
})

export default router;
