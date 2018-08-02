import jwt from 'jsonwebtoken';
import Config from 'config';
import passport from '../modules/Passport';
import { throwError } from '../utils/error';
import { isExpired } from '../utils/helper';

const { secret, expiry, cookieOptions } = Config.get('token');

export const authStrategy = strategy => (req, res, next) => {
    passport.authenticate(strategy, (err, admin) => {
        if (err || !admin) {
            return res
                .status(400)
                .json(err);
        }
    
        const payload = {
            username: admin.username,
            expiry: Date.now() + parseInt(expiry, 10),
        };
       
        return req.login(payload, { session: false }, (error) => {
            if (error) {
                res.status(400).json({ error });
            }
    
            // generate a signed json web token and return it in the response
            const token = jwt.sign(JSON.stringify(payload), secret);
    
            // assign our jwt to the cookie
            res.cookie('jwt', token, cookieOptions);
            res.json({ ...payload, token, success: true });
        });
    })(req, res, next);
};

export const requireAuth = () => (req, res, next) => {
    passport.authenticate('jwt', (jwtPayload) => {
        if (!jwtPayload) {
            return res.json(throwError(401, 'Unauthorized user'));
        } else if (isExpired(jwtPayload.expiry)) {
            return res.json(throwError(400, 'Session expired'));
        }
        return next();
    })(req, res, next);
};
