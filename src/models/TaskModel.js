import mongoose from 'mongoose';
import { TASK_COLLECTION } from './collection';

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
    },
    email: String,
    drawing: {
        type: Array
    },
    status: String,
    vettedBy: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

export const TaskModel = mongoose.model('Task', TaskSchema, TASK_COLLECTION);
