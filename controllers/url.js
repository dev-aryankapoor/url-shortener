import Url from '../models/URL.js';
import { nanoid } from 'nanoid';

async function handleGetNewShortURL(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error: "URL is required"});
    const shortId = nanoid(8);

    await Url.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    return res.status(200).json({shortId: shortId});
};

export default handleGetNewShortURL;