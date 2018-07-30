import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
import { ADMIN_COLLECTION } from './collection';

export const AdminSchema = new mongoose.Schema({
    user: {
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

AdminSchema.plugin(passportLocalMongoose, {
    usernameField: 'user',
    hashField: 'password',
});

export const AdminModel = mongoose.model('Admin', AdminSchema, ADMIN_COLLECTION);
