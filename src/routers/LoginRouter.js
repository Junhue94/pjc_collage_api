import express from 'express';
import { createLogin } from '../controllers/LoginController';

const router = express.Router();

router.route('/')
    .post(createLogin);

export default router;
