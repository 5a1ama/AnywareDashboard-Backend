import express from 'express';
const router = express.Router();

import { register } from '../Controllers/usersController';
import { login } from '../Controllers/usersController';
import { verifyToken } from '../Controllers/usersController';

router.post('/register', register);
router.post('/login', login);
router.post('/verifyToken', verifyToken);


export default router;