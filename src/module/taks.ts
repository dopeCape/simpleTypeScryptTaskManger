import mongoose, { model, Schema } from "mongoose";
import { Request,Response } from "express";



const TasksSchema = new Schema({
	title :{
		type:String,
		require:true,
		max:30
	},
	discription:{
	type:String,
	max:60
	},
status:{
	type:Boolean,
	default:false
}
		

})


const collection = model("task",TasksSchema);



export {collection} ;
