import express from 'express';
import { createAdmin } from '../controllers/AdminController';
import { requireAuth } from '../middlewares/auth';

const router = express.Router();

router.route('/')
    .post(requireAuth(), createAdmin);

export default router;
