import express from 'express';
import Url from '../models/URL.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const allUrls = await Url.find({});
    
    return res.status(200).render('home', {
        urls: allUrls
    });
});

router.get('/signup', async (req, res) => {
    return res.status(200).render('signup');
});

router.get('/login', async (req, res) => {
    return res.status(200).render('login');
});

export default router;