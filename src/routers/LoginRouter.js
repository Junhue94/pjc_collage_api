import express from 'express';
import { authStrategy } from '../middlewares/auth';
import { createLogin } from '../controllers/LoginController';

const router = express.Router();

router.route('/')
    .post(authStrategy('local'), createLogin);

export default router;
