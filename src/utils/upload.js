import Config from 'config';
import multer from 'multer';
import multerS3 from 'multer-s3';
import AWS from 'aws-sdk';
import { generateImageKey } from './helper';

const {
    accessKeyId,
    secretAccessKey,
    region,
    bucket,
    fileSizeLimit,
    acl,
} = Config.get('s3');

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region,
});

export const uploadImage = folder => multer({
    storage: multerS3({
        s3,
        acl,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        bucket: `${bucket}/${folder}`,
        key: (req, file, cb) => {
            cb(null, generateImageKey());
        },
    }),
    limits: {
        fileSize: fileSizeLimit,
    },
}).single('file');
