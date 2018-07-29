import express from 'express';
import { getCollageUrl } from '../controllers/CollageController';

const router = express.Router();

router.route('/url')
    .get(getCollageUrl);

export default router;
