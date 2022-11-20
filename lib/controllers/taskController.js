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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskByID = exports.DeleteTaskByID = exports.GetTasksByID = exports.Addtaks = exports.GetAllTasks = void 0;
const taks_1 = require("../module/taks");
const GetAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield taks_1.collection.find({});
        res.status(200).json({ result });
        console.log(result);
    }
    catch (_a) {
        throw "erroe finding all data";
    }
});
exports.GetAllTasks = GetAllTasks;
const Addtaks = (req, res) => {
    const docs = req.body;
    taks_1.collection.insertMany(docs, (err, result) => {
        if (err) {
            throw err;
        }
        res.status(201).json(result);
    });
    console.log("inside Addtaks");
};
exports.Addtaks = Addtaks;
const GetTasksByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    try {
        let result = yield taks_1.collection.findById(ID);
        res.status(200).json(result);
    }
    catch (_b) {
        res.status(404).json({ msg: "either wrong id or doc does not exists" });
        throw "client is stupid";
    }
});
exports.GetTasksByID = GetTasksByID;
const DeleteTaskByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    try {
        let result = yield taks_1.collection.findByIdAndDelete(ID);
        res.status(204).json(result);
    }
    catch (err) {
        throw err;
    }
});
exports.DeleteTaskByID = DeleteTaskByID;
const UpdateTaskByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const ID = req.params.id;
    const body = req.body;
    try {
        const result = yield taks_1.collection.findByIdAndUpdate(ID, req.body);
        res.status(202).json(result);
    }
    catch (err) {
        throw err;
    }
});
exports.UpdateTaskByID = UpdateTaskByID;
