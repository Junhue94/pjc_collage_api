import express from 'express';
import { authStrategy } from '../middlewares/auth';

const router = express.Router();

router.route('/')
    .post(authStrategy('local'));

export default router;
