import Url from '../models/URL.js';
import { nanoid } from 'nanoid';

export async function handleGetNewShortURL(req,res) {
    const body = req.body;
    // if(!body.url) return res.status(400).render('home');
    if(!body.url) return res.status(400).json({error: "URL is required"});
    const shortId = nanoid(8);

    await Url.create({
        shortId,
        redirectUrl: body.url,
        visitHistory: []
    });

    const allUrls = await Url.find({});

    return res.status(200).render('home', {
        urls: allUrls
    });
};

export async function handleRedirectURL(req,res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOneAndUpdate(
        {
            shortId: shortId
        }
        , {
            $push: {
                visitHistory: {
                    timestamp: Date.now(),
                    // ip: ip
                }
            }
        }
    );
    if(!entry) return res.status(404).json({error: "URL not found"});
    res.redirect(entry.redirectUrl);
    // const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
};

export async function handleAnalytics(req,res) {
    const shortId = req.params.shortId;
    const entry = await Url.findOne({shortId: shortId});
    if(!entry) return res.status(404).json({error: "URL not found"});
    return res.status(200).json({total_clicks: entry.visitHistory.length, analytics: entry.visitHistory});
};