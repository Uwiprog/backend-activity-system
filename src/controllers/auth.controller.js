const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const user = [];

const register = async (req,res) =>{
    const { name, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    user.push({
        id: users.legth + 1,
        name,
        email,
        password: hashedPassword,
        role
    });

    res.status(201).json({ message: "Registrasi Berhasil"});
};

const login = async (req, res) =>{
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if(!user){
        return res.status(401).json({ message: "Login gagal"})
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({ message: "Login gagal"});
    }

    const token = jwt.sign(
        { id: user.id, role: user.role},
        process.env.JWT_SECRET,
        { expiresIn: "1h"}
    );

    res.json({ token })
};

module.exports = { register, login};