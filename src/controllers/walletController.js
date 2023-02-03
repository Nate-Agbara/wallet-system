import mongoose from "mongoose";
import { AccountSchema } from "../models/walletModel";

const Account = mongoose.model('Account', AccountSchema);

export const addNewAccount = (req, res) => {
    let newAccount = new Account(req.body);

    newAccount.save((err, account) => {
        if(err){
            res.send(err)
        }
        res.json(account)
    });
};

export const getAllAccounts = (req, res) => {
    Account.find({}, (err, account) => {
        if(err){
            res.send(err)
        }
        res.json(account)
    });
};