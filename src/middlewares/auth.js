import jwt from 'jsonwebtoken';
import Config from 'config';
import passport from '../modules/Passport';

const { secret, expiry } = Config.get('token');

export const authStrategy = strategy => (req, res, next) => {
    passport.authenticate(strategy, (err, admin) => {
        if (err || !admin) {
            return res
                .status(400)
                .json(err);
        }
    
        const payload = {
            username: admin.username,
            expires: Date.now() + parseInt(expiry, 10),
        };
       
        return req.login(payload, { session: false }, (error) => {
            if (error) {
                res.status(400).json({ error });
            }
    
            // generate a signed json web token and return it in the response
            const token = jwt.sign(JSON.stringify(payload), secret);
    
            // assign our jwt to the cookie
            res.cookie('jwt', token, { httpOnly: true });
            res.json({ ...payload, token });
        });
    })(req, res, next);
};
