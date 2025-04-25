import express from 'express';
import Url from '../models/URL.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const allUrls = await Url.find({});
    
    return res.status(200).render('home', {
        urls: allUrls
    });
});

export default router;