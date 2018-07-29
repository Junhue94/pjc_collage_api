import { logger } from '../modules/Logger';
import { TaskModel } from '../models/TaskModel';

export const getCollageUrl = (req, res) => TaskModel
    .findOne()
    .sort({ updatedOn: -1 })
    .then((em) => {
        res.json({ url: em.collageUrl });
        logger.info(`Get Collage Url: ${em._id}`);
    })
    .catch(err => logger.error(`Error in get Collage Url: ${err}`));

export const createAssetImage = (req, res) => {
    const { bucket, location, key } = req.file;
    logger.info(`Upload image to ${bucket}: Image key is ${key}`);
    res.json({
        key,
        url: location,
    });
};
