import express from 'express';
import { createAssetTmp } from '../controllers/UploadController';

const router = express.Router();

router.route('/asset-tmp')
    .post(createAssetTmp);

export default router;
