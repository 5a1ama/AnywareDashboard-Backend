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
exports.verifyToken = exports.login = exports.register = void 0;
const users_1 = __importDefault(require("../Models/users"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const oldUser = yield users_1.default.find({ email: email });
        if (oldUser.length == 0) {
            const newUser = new users_1.default(req.body);
            yield newUser.save();
            res.status(201).json(newUser);
        }
        else {
            res.status(400).json("User already exists");
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const findUser = yield users_1.default.find({ email: req.body.email, password: password });
        if (findUser.length == 0) {
            res.status(401).json("wrong username or password");
        }
        else {
            const newToken = jsonwebtoken_1.default.sign({ name: findUser[0].name, email: email, password: password }, process.env.SECRET_KEY);
            res.status(201).json(newToken);
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
});
exports.login = login;
const verifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const token = req.body.token;
        const data = jsonwebtoken_1.default.verify(token, process.env.SECRET_KEY);
        res.status(201).json(data);
    }
    catch (error) {
        res.status(500).json({ message: 'Error in token', error });
    }
});
exports.verifyToken = verifyToken;
