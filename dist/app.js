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
const express_1 = __importDefault(require("express"));
require('../src/database/mongoose');
const Todo = require('./model/todo.model.ts');
const app = express_1.default();
app.use(express_1.default.json());
app.get('/todos', (req, res) => {
    res.send('hello');
});
app.get('/todo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const todo = yield new Todo(req.body).save();
    res.status(200).send(todo);
}));
app.get('/todo/:id', (req, res) => {
    res.send('hello');
});
app.put('/todos', (req, res) => {
    res.send('hello');
});
app.delete('/todo/:id', (req, res) => {
    res.send('hello');
});
app.listen(5000, () => console.log("Server running"));
