import express from 'express'
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import { routers } from './routers'
import { logger } from './modules/Logger';

// Create Express server
export const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(compression());
app.use(helmet());

// Run routes
routers(app);

// Catch all routes
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res, next) => {
    logger.error('Error Handler', err);
    res.status(err.status || 500);
    res.send('Error');
});