
import express,{Express,Response,Request} from "express";
import ConnectToDB from "./db/ConnectDB";
import { router } from "./routes/routes";
import path from "path";


const app:Express = express()
app.use(express.json())
app.use(express.urlencoded())

app.use(express.static(path.join(__dirname,'/public')));
app.use("/api/v1",router)
const PORT = process.env.PORT || 9000
app.get("/",(req,res)=>{
	res.sendFile(path.join(__dirname,"/public/index.html"))

})
const start = async ()=>{
try{

	await ConnectToDB();
	app.listen(PORT,()=>{

	console.log(`listing on port ${PORT}`)
})
}
catch{

	throw("some random errr")
}



}


start();

