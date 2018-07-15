import Config from 'config';
import { app } from './app';
import { logger } from './modules/Logger';

const { port, host } = Config.get('app');

export const server = app.listen(port, () => logger.info(`Server started on http://${host}:${port}`));
