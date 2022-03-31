import User from "../models/user";
import jwt from "jsonwebtoken";

export const signup = async (req,res) => {
    const {email, name, password } = req.body;
    try {
        const existUser = await User.findOne({email}).exec();
        if(existUser){
            return res.json({
                message: "User da ton tai"
            })
        }
        const user = await new User({email, name, password}).save();
        res.json({
            user: {
                _id: user._id,
                email: user.email,
                name: user.name
            }
        })
    } catch (error) {
        
    }
}

export const signin = async (req, res) => {
    const { email, password} = req.body;
    const user = await User.findOne({email}).exec();
    if(!user){
        res.status(401).json({
            message: "User khong ton tai"
        })
    }
    if(!user.authenticate(password)){
        res.status(401).json({
            message: "Mat khau khong dung"
        })
    }
    const token = jwt.sign({email}, "123456", { expiresIn: 60 * 60 });
    res.json({
        token,
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        }
    })
}