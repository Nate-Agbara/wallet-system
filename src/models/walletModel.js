import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const AccountSchema = new Schema({
    firstName: {
        type: String,
        required: 'enter firstname'
    },
    lastName: {
        type: String,
        required: 'enter lastname'
    },
    email: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
});