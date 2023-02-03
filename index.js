import express from "express";
import routes from './src/routes/walletRoutes.js';
import mongoose from "mongoose";
import bodyParser from 'body-parser';

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

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT}`)
);