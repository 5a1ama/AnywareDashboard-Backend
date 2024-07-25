import express from 'express';
const router = express.Router();

import { createAnnouncement, listAnnouncements, updateAnnouncement, deleteAnnouncement} from '../Controllers/announcementsController';

router.post('/createAnnouncement', createAnnouncement);
router.get('/listAnnouncements', listAnnouncements);
router.put('/updateAnnouncement/:id', updateAnnouncement);
router.delete('/deleteAnnouncement/:id', deleteAnnouncement);

export default router;