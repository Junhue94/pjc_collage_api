import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import morgan from 'morgan';
import mongoose from 'mongoose';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import Config from 'config';
import passport from './modules/Passport';
import { routers } from './routers';
import { logger } from './modules/Logger';

// Create Express server
export const app = express();
const {
    user, password, host, database, options,
} = Config.get('mongo');
const {
    sessionSecret,
    cookieMaxAge,
} = Config.get('token');

// Database connection
if (process.env.NODE_ENV === 'development') {
    mongoose.connect(`mongodb+srv://${user}:${password}@${host}/${database}`, options);
} else {
    mongoose.connect(`mongodb://${host}/${database}`, options);
}
const db = mongoose.connection;
db.on('error', () => logger.error('Database :: Connection Error'));
db.once('open', () => logger.info('Database :: Successfully connected'));

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
    name: 'pjc_collage',
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: cookieMaxAge,
    },
}));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(morgan('combined'));
app.use(compression());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

// Run routes
routers(app);

// Catch all routes
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// Error handler
app.use((err, req, res) => {
    logger.error('Error Handler', err);
    res.status(err.status || 500);
    res.send('Error');
});
