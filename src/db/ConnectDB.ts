import {connect} from "mongoose";


import * as dotenv from 'dotenv'


const  ConnectToDB = async ()=>{
	try{
	 await connect("mongo db uri")
	}
	catch{
	throw("failed  to connect")
	}


}


export default ConnectToDB
