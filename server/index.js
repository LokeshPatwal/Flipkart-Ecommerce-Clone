import express from 'express'
import { Connection } from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js'
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = process.env.PORT || 8000;

Connection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

DefaultData();