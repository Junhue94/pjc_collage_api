import passport from 'passport';
import LocalStrategy from 'passport-local';
import { AdminModel } from '../models/AdminModel';
import { logger } from './Logger';
import { throwError } from '../utils/error';

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    AdminModel
        .findById(id)
        .then(res => done(null, res))
        .catch(err => logger.error(`Error in deserializing user: ${err}`));
});

passport.use(
    'local',
    new LocalStrategy((username, password, done) => {
        AdminModel
            .findOne({ username })
            .then(async (admin) => {
                const matchPassword = await admin.comparePassword(password, admin.password);
                if (!matchPassword) {
                    return done(null, false, throwError(400, 'Invalid username or password'));
                }
                return done(null, admin);
            })
            .catch((err) => {
                logger.error(`Error in admin login: ${err}`);
                return done(err);
            });
    }),
);

export default passport;
