import express from 'express';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import routes from './routes.js';
import cors from 'cors';

const app = express();
dotenv.config();

app.use(express.json());

conectarDB();

// const dominiosPermitidos = [process.env.FRONTEND_URL]
// const corsOptions ={
//     origin:function(origin,callback){
//         if(dominiosPermitidos.indexOf(origin)!== -1){
//             callback(null,true);
//         }else{
//             callback(new Error('No permitido por CORS:('))
//         }
//     }
// }

// app.use(cors(corsOptions))


app.use('/api', routes);


const PORT = process.env.PORT || 4000

app.listen(4000, ()=>{
    console.log(`Servidor funcionando en el puerto ${PORT}`);
});