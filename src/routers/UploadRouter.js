import express from 'express';
import Config from 'config';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import { createAssetTmp } from '../controllers/UploadController';
import { generateImageKey } from '../utils/helper';

const router = express.Router();

const {
    accessKeyId,
    secretAccessKey,
    region,
    bucket,
    folderAssetTmp,
    fileSizeLimit,
    acl,
} = Config.get('s3');

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region,
});

const upload = multer({
    storage: multerS3({
        s3,
        acl,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        bucket: `${bucket}/${folderAssetTmp}`,
        key: (req, file, cb) => {
            cb(null, generateImageKey());
        },
    }),
    limits: {
        fileSize: fileSizeLimit,
    },
}).single('file');

router.route('/asset-tmp')
    .post(upload, createAssetTmp);

export default router;
