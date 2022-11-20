import { collection } from "../module/taks";
import { Response, Request } from "express";
import mongoose from "mongoose";

const GetAllTasks = async (req: Request, res: Response) => {
  try {
    let result = await collection.find({});
    res.status(200).json({ result });
    console.log(result);
  } catch {
    throw "erroe finding all data";
  }
};
const Addtaks = (req: Request, res: Response) => {
  const docs = req.body;
  collection.insertMany(docs, (err, result) => {
    if (err) {
      throw err;
    }
    res.status(201).json(result);
  });

  console.log("inside Addtaks");
};

const GetTasksByID = async (req: Request, res: Response) => {
  const ID = req.params.id;

  try {
    let result = await collection.findById(ID);

    res.status(200).json(result);
  } catch {
    res.status(404).json({ msg: "either wrong id or doc does not exists" });
    throw "client is stupid";
  }
};

const DeleteTaskByID = async (req: Request, res: Response) => {
  const ID = req.params.id;
  try {
    let result = await collection.findByIdAndDelete(ID);
    res.status(204).json(result);
  } catch (err) {
    throw err;
  }
};
const UpdateTaskByID = async (req: Request, res: Response) => {
  const ID = req.params.id;
  const body = req.body;

  try {
    const result = await collection.findByIdAndUpdate(ID, req.body);
    res.status(202).json(result);
  } catch (err) {
    throw err;
  }
};
export { GetAllTasks, Addtaks, GetTasksByID, DeleteTaskByID ,UpdateTaskByID};
