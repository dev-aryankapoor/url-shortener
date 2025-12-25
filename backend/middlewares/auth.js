import jwt from "jsonwebtoken";
import User from '../models/user.js';

export async function restrictToLoggedinUsersOnly(req, res, next){
    const token = req.cookies?.token;
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "unauthorized access"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.userId);

        if (!user) {
            return res.status(401).json({ message: "login required" });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(401).json({ message: "invalid token" });
    }
}