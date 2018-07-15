import TaskRouter from './TaskRouter'

export const routers = app => {
    app.use('/api/task', TaskRouter);
};
