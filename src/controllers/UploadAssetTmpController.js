import { logger } from '../modules/Logger';

export const createAssetTmp = (req, res) => {
    const { bucket, location, key } = req.file;
    logger.info(`Upload image to ${bucket}: Image key is ${key}`);
    res.json({
        key,
        url: location,
    });
};
