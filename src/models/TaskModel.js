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
    },
    status: String,
    vettedBy: AdminSchema,
    createdOn: {
        type: Date,
        default: Date.now,
    },
});

export const TaskModel = mongoose.model('Task', TaskSchema, TASK_COLLECTION);
