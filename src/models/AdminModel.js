import mongoose from 'mongoose';
import { ADMIN_COLLECTION } from './collection';

export const AdminSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export const AdminModel = mongoose.model('Admin', AdminSchema, ADMIN_COLLECTION);
