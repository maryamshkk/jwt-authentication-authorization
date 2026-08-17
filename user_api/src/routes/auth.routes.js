// register route 
import express from "express";
import bcrypt from "bcrypt";
import prisma from "../lib/prisma";

const router = express.Router();

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
        const user = await prima.user.create({
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

module.exports = router;