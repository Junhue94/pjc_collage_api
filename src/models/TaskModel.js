import mongoose from 'mongoose';
import { TASK_COLLECTION } from './collection';
import { AdminSchema } from './AdminModel';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    class: {
        type: String,
        required: true,
    },
    email: String,
    drawing: {
        type: Array,
        default: null,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'approved', 'rejected'],
    },
    vettedBy: {
        type: AdminSchema,
        default: null,
    },
    createdOn: {
        type: Date,
        default: Date.now,
    },
    updatedOn: {
        type: Date,
        default: null,
    },
});

export const TaskModel = mongoose.model('Task', TaskSchema, TASK_COLLECTION);
