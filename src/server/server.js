import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();

const base = process.env.PWD;
const port = process.env.PORT || 8081;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
app.use('/', express.static(path.join(base, 'build')));

http.createServer(app).listen(port, () => {
    console.log(`Server is listening on Port ${port}`);
});
