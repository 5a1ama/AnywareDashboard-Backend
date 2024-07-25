import express from 'express';
const router = express.Router();

import { createQuiz, listQuizes, updateQuiz, deleteQuiz } from '../Controllers/quizesController';

router.post('/createQuiz', createQuiz);
router.get('/listQuizes', listQuizes);
router.put('/updateQuiz/:id', updateQuiz);
router.delete('/deleteQuiz/:id', deleteQuiz);


export default router;