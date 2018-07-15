import { TaskModel } from '../models/TaskModel';
import { logger } from '../modules/Logger';

export const createTask = (req, res) => {
    const data = {
        name: 'Tan Ming Liang',
        class: '12S23',
        email: 'tan@test.com',
        drawing: [{}, {}],
        status: 'approved',
        vettedBy: 'Me',
    };
    
    const model = new TaskModel(data);
    
    return model
        .save()
        .then(em => {
            res.json(em);
            logger.info(`Task created: ${em._id}`);
        })
        .catch(err => logger.error(`Error in creating Task: ${err}`));
};

export const findTask = (req, res) => {
    res.send('Find Task');
};
