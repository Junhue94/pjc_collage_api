import { logger } from '../modules/Logger';
import { AdminModel } from '../models/AdminModel';

export const createAdmin = async (req, res) => {
    const newAdmin = new AdminModel(req.body);
    newAdmin.password = newAdmin.generateHash(req.body.password);

    return newAdmin
        .save()
        .then((em) => {
            res.json(em);
            logger.info(`Create Admin: ${em._id}`);
        })
        .catch(err => logger.error(`Error in create Admin: ${err}`));
};
