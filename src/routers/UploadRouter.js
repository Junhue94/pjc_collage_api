import express from 'express';
import Config from 'config';
import { createAssetTmp } from '../controllers/UploadController';
import { uploadImage } from '../utils/upload';

const { folderAssetTmp } = Config.get('s3');

const router = express.Router();

router.route('/asset-tmp')
    .post(uploadImage(folderAssetTmp), createAssetTmp);

export default router;
