import Config from 'config';
import AWS from 'aws-sdk';
import { logger } from '../modules/Logger';
import { generateImageKey } from '../utils/helper';

const {
    accessKeyId,
    secretAccessKey,
    region,
    signatureVersion,
    bucketAssetTmp,
} = Config.get('s3');
const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region,
    signatureVersion,
});

export const createAssetTmp = (req, res) => {
    const key = generateImageKey();
    const options = {
        Bucket: bucketAssetTmp,
        ContentType: 'image/png',
        Key: key,
        Expires: 600, // expires in 60 seconds
    };
    
    s3.getSignedUrl('putObject', options, (err, url) => {
        if (err) {
            logger.error(`Error: ${err}`);
        } else {
            res.json({ key, url });
            logger.info(`Create pre-signed url for Asset: ${url}`);
        }
    });
};
