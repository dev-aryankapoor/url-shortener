import express from 'express';
import {handleGetNewShortURL, handleRedirectURL, handleAnalytics} from '../controllers/url.js';

const router = express.Router();

router.post('/', handleGetNewShortURL);
router.get('/:shortId', handleRedirectURL);
router.get('/analytics/:shortId', handleAnalytics);

export default router;