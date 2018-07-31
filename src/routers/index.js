import AdminRouter from './AdminRouter';
import TaskRouter from './TaskRouter';
import UploadAssetTmpRouter from './UploadAssetTmpRouter';
import UploadCollageRouter from './UploadCollageRouter';

export const routers = (app) => {
    app.use('/api/admin', AdminRouter);
    app.use('/api/task', TaskRouter);
    app.use('/api/upload_asset_tmp', UploadAssetTmpRouter);
    app.use('/api/upload_collage', UploadCollageRouter);
};
