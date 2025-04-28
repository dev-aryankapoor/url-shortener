import User from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
import { setUserBySessionId, getUserBySessionId } from '../services/auth.js';

export async function handleUserSignup(req, res){
    const { name, email, password } = req.body;
    await User.create({ name, email, password });
    return res.redirect('/');
}

export async function handleUserLogin(req, res){
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
        return res.status(401).render('login', { error: 'Invalid email or password' });
    }
    const sessionId = uuidv4();
    setUserBySessionId(sessionId, user);
    res.cookie('uid', sessionId);
    return res.redirect('/');
}