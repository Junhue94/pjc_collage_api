import passport from 'passport';
import Config from 'config';
import jwt from 'jsonwebtoken';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { AdminModel } from '../models/AdminModel';
import { logger } from './Logger';
import { throwError } from '../utils/error';

const { secret } = Config.get('token');

passport.use(
    'local',
    new LocalStrategy((username, password, done) => {
        AdminModel
            .findOne({ username })
            .then(async (admin) => {
                const matchPassword = await admin.comparePassword(password, admin.password);
                if (!matchPassword) {
                    return done(throwError(400, 'Invalid username or password'), false);
                }
                return done(null, admin);
            })
            .catch((err) => {
                logger.error(`Error in admin login: ${err}`);
                return done(err);
            });
    }),
);

passport.use(
    'jwt',
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: secret,
        },
        (jwtPayload, done) => done(jwtPayload),
    ),
);

export default passport;
