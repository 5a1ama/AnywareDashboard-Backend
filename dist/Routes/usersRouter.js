"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const usersController_1 = require("../Controllers/usersController");
const usersController_2 = require("../Controllers/usersController");
const usersController_3 = require("../Controllers/usersController");
router.post('/register', usersController_1.register);
router.post('/login', usersController_2.login);
router.post('/verifyToken', usersController_3.verifyToken);
exports.default = router;
