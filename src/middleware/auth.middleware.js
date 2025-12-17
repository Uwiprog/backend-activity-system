const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({message: "Token tidak ada"});
    }

    const token = authHeader.split(" ")[1];
    console.log("AUTH HEADER:", authHeader);
    console.log("HASIL SPLIT:", authHeader.split(" "));

    try{
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (err){
        return res.status(401).json({message: "Token tidak valid"})
    }

    console.log("TOKEN DITERIMA:", token);
    console.log("SECRET:", process.env.JWT_SECRET);
}

module.exports = authMiddleware;