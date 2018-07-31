export const isAuthenticated = (req, res, next) => {
    if (req.user) {
        return next();
    }
    return res.send(401, 'Unauthorized user');
};
