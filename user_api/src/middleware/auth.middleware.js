import jwt from "jsonwebtoken";

const authenticate = (req,res,next) => {
    try{
        const authHeader = req.headers.authorization;

        // 1. Check authentication header
        if(!authHeader) {
            return res.status(401).json({
                message: "Authorzation header is missing"
            })
        }

        // Check bearer token
        if(!authHeader.startsWith("Bearer")){
            return res.status(401).json({
                message: "Invalid authorization format"
            })
        }

        // 3. Extract Token
        const token = authHeader.split(" ")[1];

        // 4. Verify Token
        const decoded = jwt.verify(
            token, 
            process.env.JWT_SECRET
        );

        // Store user information in request
        req.user = decoded;
        
        // continue to middleware/controller
        next();
    }
    catch(error){
        return res.status(401).json({
            message : "Invalid or expired token"
        })
    }
}

export default authenticate;