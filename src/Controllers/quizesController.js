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
exports.deleteQuiz = exports.updateQuiz = exports.listQuizes = exports.createQuiz = void 0;
const quizes_1 = __importDefault(require("../Models/quizes"));
const createQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newQuiz = new quizes_1.default(req.body);
        yield newQuiz.save();
        res.status(201).json(newQuiz);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating announcement', error });
    }
});
exports.createQuiz = createQuiz;
const listQuizes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quizes = yield quizes_1.default.find();
        res.json(quizes);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving announcements', error });
    }
});
exports.listQuizes = listQuizes;
const updateQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedQuiz = yield quizes_1.default.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedQuiz) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.json(updatedQuiz);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating announcement', error });
    }
});
exports.updateQuiz = updateQuiz;
const deleteQuiz = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const deletedQuiz = yield quizes_1.default.findByIdAndDelete(id);
        if (!deletedQuiz) {
            return res.status(404).json({ message: 'Announcement not found' });
        }
        res.status(204).json({ message: 'Announcement deleted' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting announcement', error });
    }
});
exports.deleteQuiz = deleteQuiz;
