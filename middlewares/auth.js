import { getUserBySessionId } from '../services/auth.js';

export async function restrictToLoggedinUsersOnly(req, res, next){
    const userUid = req.cookies?.uid;
    if (!userUid) {
        return res.redirect('/login', { error: 'You must be logged in to access this page' });
    }
    const user = await getUserBySessionId(userUid);
    if (!user) {
        return res.redirect('/login', { error: 'You must be logged in to access this page' });
    }
    req.user = user;
    next();
}