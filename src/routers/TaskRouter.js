import express from 'express';
import Config from 'config';
import { uploadImage } from '../utils/upload';
import { requireAuth } from '../middlewares/auth';
import {
    createTask,
    getTask,
    findTask,
    updateTask,
} from '../controllers/TaskController';

const { folderAsset } = Config.get('s3');

const router = express.Router();

router.route('/')
    .get(requireAuth(), findTask)
    .post(createTask);

router.route('/:id')
    .get(requireAuth(), getTask)
    .put(requireAuth(), uploadImage(folderAsset), updateTask);

export default router;
