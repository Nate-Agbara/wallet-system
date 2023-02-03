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

export const getAccountById = (req, res) => {
    Account.findById(req.params.accountId, (err, account) => {
        if(err){
            res.send(err)
        }
        res.json(account)
    });
};

export const updateAccountById = (req, res) => {
    Account.findOneAndUpdate({ _id: req.params.accountId}, req.body, { new: true }, (err, account) => {
        if(err){
            res.send(err)
        }
        res.json(account)
    });
};

export const deleteAccountById = (req, res) => {
    Account.remove({ _id: req.params.accountId}, (err) => {
        if(err){
            res.send(err)
        }
        res.json({message: 'successfully deleted account'})
    });
};