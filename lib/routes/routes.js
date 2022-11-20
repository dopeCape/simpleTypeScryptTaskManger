"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const taskController_1 = require("../controllers/taskController");
const router = (0, express_1.Router)();
exports.router = router;
router.route("/tasks").get(taskController_1.GetAllTasks).post(taskController_1.Addtaks);
router.route("/tasks/:id").get(taskController_1.GetTasksByID).delete(taskController_1.DeleteTaskByID).patch(taskController_1.UpdateTaskByID);
