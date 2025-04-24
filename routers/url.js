import express from 'express';
import { handleGetNewShortURL } from '../controllers/url.js';

const router = express.Router();

router.post('/', handleGetNewShortURL);