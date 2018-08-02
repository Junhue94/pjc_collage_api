import express from 'express';
import { findLogout } from '../controllers/LogoutController';

const router = express.Router();

router.route('/')
    .get(findLogout);

export default router;
