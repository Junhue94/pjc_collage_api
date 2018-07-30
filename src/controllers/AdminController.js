import bcrypt from 'bcrypt';
import Config from 'config';
import { logger } from '../modules/Logger';
import { AdminModel } from '../models/AdminModel';

const { saltRounds } = Config.get('token');

export const createAdmin = async (req, res) => {
    const hashedPassword = bcrypt.hash(req.body.password, saltRounds);

    const newAdmin = new AdminModel(req.body);

    return newAdmin
        .save()
        .then((em) => {
            res.json(em);
            logger.info(`Create Admin: ${em._id}`);
        })
        .catch(err => logger.error(`Error in create Admin: ${err}`));
};
