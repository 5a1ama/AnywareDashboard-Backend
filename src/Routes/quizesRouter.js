"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const quizesController_1 = require("../Controllers/quizesController");
router.post('/createQuiz', quizesController_1.createQuiz);
router.get('/listQuizes', quizesController_1.listQuizes);
router.put('/updateQuiz/:id', quizesController_1.updateQuiz);
router.delete('/deleteQuiz/:id', quizesController_1.deleteQuiz);
exports.default = router;
