import Config from 'config';

const { cookieOptions } = Config.get('token');

export const findLogout = (req, res) => {
    req.logout();
    res.clearCookie('jwt', cookieOptions);
    res.json({ success: true });
};
