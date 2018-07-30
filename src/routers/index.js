import AdminRouter from './AdminRouter';
import TaskRouter from './TaskRouter';
import UploadRouter from './UploadRouter';
import CollageRouter from './CollageRouter';

export const routers = (app) => {
    app.use('/api/admin', AdminRouter);
    app.use('/api/task', TaskRouter);
    app.use('/api/upload', UploadRouter);
    app.use('/api/collage', CollageRouter);
};
