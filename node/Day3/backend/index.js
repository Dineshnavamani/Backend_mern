import http from "http"
import dotenv from 'dotenv'
import {fileshande} from "./fileprocess/handleingfiles.js"

dotenv.config();
const app =http.createServer()
// console.log(app);


const PORT = process.env.PORT || 3000
console.log(PORT);
fileshande()


app.listen(PORT,()=>{
    console.log(`server conncted on ... http://localhost:${PORT}`)
})