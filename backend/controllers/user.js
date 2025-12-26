import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
import jwt from "jsonwebtoken";

export async function handleUserSignup(req, res){
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.status(201).json({
        success: true,
        message: 'user created successfully'
    });
}

export async function handleUserLogin(req, res){
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'invalid email'
        });
    }
    
    const isPassValid = await user.comparePassword(password);
    if (!isPassValid) {
        return res.status(401).json({
            success: false,
            message: 'invalid password'
        });
    }

    const token = jwt.sign(
        {userId: user._id},
        process.env.JWT_SECRET,
        { expiresIn: "7d"
        })
    res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax',
        secure: false
    });

    return res.json({
        success: true,
        message: "user logged in successfully"
    });
}