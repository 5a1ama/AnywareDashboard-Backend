"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAnnouncement = exports.updateAnnouncement = exports.listAnnouncements = exports.createAnnouncement = void 0;
const announcements_1 = __importDefault(require("../Models/announcements"));
const createAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newAnnouncement = new announcements_1.default(req.body);
        yield newAnnouncement.save();
        res.status(201).json(newAnnouncement);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating announcement', error });
    }
});
exports.createAnnouncement = createAnnouncement;
const listAnnouncements = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const announcements = yield announcements_1.default.find();
        res.json(announcements);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving announcements', error });
    }
});
exports.listAnnouncements = listAnnouncements;
const updateAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const announcement = yield announcements_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.json(announcement);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating announcement', error });
    }
});
exports.updateAnnouncement = updateAnnouncement;
const deleteAnnouncement = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const announcement = yield announcements_1.default.findByIdAndDelete(id);
        if (!announcement) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.status(204).json({ message: 'Announcement deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting announcement', error });
    }
});
exports.deleteAnnouncement = deleteAnnouncement;
