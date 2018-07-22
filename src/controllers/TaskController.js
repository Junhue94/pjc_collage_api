import { TaskModel } from '../models/TaskModel';
import { logger } from '../modules/Logger';

export const createTask = (req, res) => {
    const newTask = new TaskModel(req.body);
    
    return newTask
        .save()
        .then((em) => {
            res.json(em);
            logger.info(`Create Task: ${em._id}`);
        })
        .catch(err => logger.error(`Error in create Task: ${err}`));
};

export const findTask = (req, res) => TaskModel
    .find(req.query)
    .then((em) => {
        res.json(em);
        logger.info(`Find Task: ${em.length} record(s) found`);
    })
    .catch(err => logger.error(`Error in find Task: ${err}`));

export const getTask = (req, res) => TaskModel
    .findById(req.params.id)
    .then((em) => {
        res.json(em);
        logger.info(`Get Task: ${em._id}`);
    })
    .catch(err => logger.error(`Error in get Task: ${err}`));