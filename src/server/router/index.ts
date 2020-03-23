import express from 'express';
import checkAuth from '../middleware/checkauth';

import authHandler from '../handlers/auth';

const router = express.Router();

router.get('/auth', authHandler.auth);
router.get('/unauth', authHandler.unauth);
router.get('/dashboard',checkAuth, authHandler.dashboard);

export default router;