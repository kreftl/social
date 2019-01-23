import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const data = JSON.parse(fs.readFileSync(__dirname + "/data/sentimentdata.json", 'utf8'));

app.get('/', (req, res) => res.send('Socialize! Server'));

app.get('/properties/:id', (req, res) => res.end(JSON.stringify(data.filter(d => d._id == req.params.id)[0].properties)));

app.post('/coordinates', (req, res) => {
    let resData = data
        .filter(d => req.body.sentiments[d.properties.labelledSentiment] && req.body.sources[d.properties.source])
        .map(d => {
            let c = d.coordinate; 
            c.id = d._id; 
            c.sentiment = d.properties.labelledSentiment;
            c.source = d.properties.source;
            return c; 
        });
    res.end(JSON.stringify(resData));
});

app.get('/analytics', (req, res) => {
    let sentiments = {}, sources = {};
    data.forEach(d => {
        let p = d.properties, l = p.labelledSentiment, s = p.source;
        if (sentiments[l] == undefined) sentiments[l] = {};
        if (sentiments[l][s] == undefined) sentiments[l][s] = 0;
        if (sources[s] == undefined) sources[s] = {};
        if (sources[s][l] == undefined) sources[s][l] = 0;
        sentiments[l][s] += 1;
        sources[s][l] += 1;
    });
    res.end(JSON.stringify({sentiments, sources}));
});

app.get('/coordinates', (req, res) => res.end(JSON.stringify(data.map(d => {let c = d.coordinate; c.id = d._id; return c; }))));


app.listen(4000, () => console.log(`Socialize! Server running on port 4000`));
