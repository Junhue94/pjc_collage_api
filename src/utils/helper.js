import moment from 'moment';
import uuidv4 from 'uuid/v4';

export const generateImageKey = () => {
    const timestamp = moment().format('x');
    const uuid = uuidv4();
    return `${timestamp}_${uuid}`;
};
