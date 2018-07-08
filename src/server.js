import Config from 'config';
import { app } from './app';
import { logger } from './modules/Logger';

const appConfig = Config.get('app');

export const server = app.listen(appConfig.port, () => logger.info(`Server started on http://${appConfig.host}:${appConfig.port}`));
