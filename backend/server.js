import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());

const data = JSON.parse(fs.readFileSync(__dirname + "/data/sentimentdata.json", 'utf8'));

app.get('/', (req, res) => res.send('Social Server'));

app.get('/data', (req, res) => res.end(JSON.stringify(data)));

app.get('/properties/:id', (req, res) => res.end(JSON.stringify(data.filter(d => d._id == req.params.id)[0].properties)));

app.get('/coordinates', (req, res) => res.end(JSON.stringify(data.map(d => {let c = d.coordinate; c.id = d._id; return c; }))));

app.listen(4000, () => console.log(`Social Server running on port 4000`));
