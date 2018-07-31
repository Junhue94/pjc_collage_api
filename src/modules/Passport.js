import passport from 'passport';
import * as LocalStrategy from 'passport-local';
import { AdminModel } from '../models/AdminModel';
import { logger } from './Logger';

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
    'local-login',
    new LocalStrategy((username, password, done) => {
        AdminModel
            .findOne(username)
            .then((admin) => {
                if (!admin.comparePassword(passport)) {
                    return done(null, false, { errMsg: 'Invalid password' });
                }
                return done(null, admin);
            })
            .catch(err => logger.error(`Error in user login: ${err}`));
    }),
);

export default passport;
