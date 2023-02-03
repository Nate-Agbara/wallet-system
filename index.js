import express from "express";
import routes from './src/routes/walletRoutes.js';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import jsonwebtoken from "jsonwebtoken";


const app = express();
const PORT = 3000;

//mongoose connection
mongoose.set('strictQuery', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/walletdb', {
    useNewUrlParser: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//JWT setup
app.use((req, res, next) => {
    if(req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] == 'JWT'){
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'JSONWEBTOKEN', (err, decode) => {
            if(err) req.user = undefined;
            req.user = decode;
            next();

        })
    }else{
        req.user = undefined;
        next();
    }
});

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);