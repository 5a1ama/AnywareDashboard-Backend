"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const announcementsController_1 = require("../Controllers/announcementsController");
router.post('/createAnnouncement', announcementsController_1.createAnnouncement);
router.get('/listAnnouncements', announcementsController_1.listAnnouncements);
router.put('/updateAnnouncement/:id', announcementsController_1.updateAnnouncement);
router.delete('/deleteAnnouncement/:id', announcementsController_1.deleteAnnouncement);
exports.default = router;
