import express from 'express';
import { createAdmin } from '../controllers/AdminController';


const router = express.Router();

router.route('/')
    .post(createAdmin);

export default router;
