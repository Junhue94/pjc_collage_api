import TaskRouter from './TaskRouter';
import UploadRouter from './UploadRouter';

export const routers = (app) => {
    app.use('/api/task', TaskRouter);
    app.use('/api/upload', UploadRouter);
};
