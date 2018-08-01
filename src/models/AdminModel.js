import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import Config from 'config';
import { ADMIN_COLLECTION } from './collection';

const { saltRounds } = Config.get('token');

export const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
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

AdminSchema.methods.generateHash = password => bcrypt.hash(password, saltRounds);
AdminSchema.methods.comparePassword = (password, hash) => bcrypt.compare(password, hash);

export const AdminModel = mongoose.model('Admin', AdminSchema, ADMIN_COLLECTION);
