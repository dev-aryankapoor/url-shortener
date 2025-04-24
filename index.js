import express from 'express';

const app = express();

app.get('/',(req,res) => {
    res.send("url shortener");
});

app.listen(8001, () => {
    console.log("Server is running on port 8001");
});