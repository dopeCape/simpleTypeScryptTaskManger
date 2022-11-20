import {Router} from "express";
import { Addtaks, DeleteTaskByID, GetAllTasks, GetTasksByID, UpdateTaskByID } from "../controllers/taskController";

const router = Router();


router.route("/tasks").get(GetAllTasks).post(Addtaks)
router.route("/tasks/:id").get(GetTasksByID).delete(DeleteTaskByID).patch(UpdateTaskByID)

export {router}
