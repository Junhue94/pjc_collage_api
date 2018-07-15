import mongoose from 'mongoose';
import { ADMIN_COLLECTION } from './collection';

export const AdminSchema = new mongoose.Schema({
    user: String,
    password: String,
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export const AdminModel = mongoose.model('Admin', AdminSchema, ADMIN_COLLECTION);
