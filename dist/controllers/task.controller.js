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
exports.readById = exports.deleteTask = exports.updateTask = exports.getTask = exports.createTask = void 0;
const db_model_1 = __importDefault(require("../models/db.model"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    console.log('Received data:', req.body);
    try {
        const newTask = yield db_model_1.default.create({ title, content });
        res.status(200).json(newTask);
    }
    catch (err) {
        console.error('Error creating task:', err);
        res.status(400).json(err);
    }
});
exports.createTask = createTask;
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allData = yield db_model_1.default.find();
    const mappedData = `<ul>
  ${allData
        .map((idx) => {
        return `<li>${idx.title} - ${idx.content}</li> `;
    })
        .join('')}
</ul>`;
    res.send(mappedData);
});
exports.getTask = getTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateTask = yield db_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!updateTask)
            res.status(400).json({ msg: 'data not found' });
        res.status(200).json(updateTask);
    }
    catch (err) {
        res.status(500).json({ err });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield db_model_1.default.findByIdAndDelete(req.params.id);
        if (!task)
            res.status(400).json({ msg: "Task not found" });
        res.status(200).json({ msg: "task deleted" });
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.deleteTask = deleteTask;
//geting tasks bu id only i.e. read opration using id
const readById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = db_model_1.default.findById(req.params.id, req.body);
        if (!task)
            res.status(400).json({ msg: "Task not found" });
        res.send(task);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
exports.readById = readById;
