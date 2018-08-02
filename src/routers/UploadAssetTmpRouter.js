import express from 'express';
import Config from 'config';
import { createAssetTmp } from '../controllers/UploadAssetTmpController';
import { uploadImage } from '../utils/upload';
import { requireAuth } from '../middlewares/auth';

const { folderAssetTmp } = Config.get('s3');

const router = express.Router();

router.route('/')
    .post(requireAuth(), uploadImage(folderAssetTmp), createAssetTmp);

export default router;
