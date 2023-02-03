import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    firstname: {
        type: string,
        required: 'enter firstname'
    },
    lastname: {
        type: string,
        required: 'enter lastname'
    },
    email: {
        type: string
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});