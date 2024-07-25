"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const announcementsSchema = new mongoose_1.default.Schema({
    announcer: {
        type: String,
        required: true
    },
    department: {
        type: String
    },
    message: {
        type: String
    }
});
exports.default = mongoose_1.default.model('announcements', announcementsSchema);
