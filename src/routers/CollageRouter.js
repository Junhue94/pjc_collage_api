import express from 'express';
import Config from 'config';
import { getCollageUrl, createAssetImage } from '../controllers/CollageController';
import { uploadImage } from '../utils/upload';

const router = express.Router();

const { folderAsset } = Config.get('s3');

router.route('/')
    .post(uploadImage(folderAsset), createAssetImage)
    .get(getCollageUrl);

export default router;
