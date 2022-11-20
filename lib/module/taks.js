"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collection = void 0;
const mongoose_1 = require("mongoose");
const TasksSchema = new mongoose_1.Schema({
    title: {
        type: String,
        require: true,
        max: 30
    },
    discription: {
        type: String,
        max: 60
    },
    status: {
        type: Boolean,
        default: false
    }
});
const collection = (0, mongoose_1.model)("task", TasksSchema);
exports.collection = collection;
