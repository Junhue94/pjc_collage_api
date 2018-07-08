import HomeRouter from './HomeRouter'

export const routers = app => {
    app.use('/', HomeRouter);
};
