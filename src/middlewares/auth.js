import passport from '../modules/Passport';

export const authStrategy = strategy => (req, res, next) => {
    passport.authenticate(strategy, (err, admin, info) => {
        if (err) {
            return next(err);
        }
        if (!admin) {
            return res.json(info);
        }
        return req.login(admin, { session: false }, next);
    })(req, res, next);
};
