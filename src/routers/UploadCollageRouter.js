import express from 'express';
import Config from 'config';
import { getCollageUrl, createAssetImage } from '../controllers/UploadCollageController';
import { uploadImage } from '../utils/upload';
import { requireAuth } from '../middlewares/auth';

const router = express.Router();

const { folderCollage } = Config.get('s3');

router.route('/')
    .post(requireAuth(), uploadImage(folderCollage), createAssetImage)
    .get(getCollageUrl);

export default router;
