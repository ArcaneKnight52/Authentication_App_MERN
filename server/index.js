const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require("dotenv").config();

const app = express();
const {MONGO_URL , PORT} = process.env;
// const connectDatabase = async () =>{
//     try{
//         const conn = await mongoose
//         .connect(MONGO_URL,{
//             newUrlParser:true,
//             newUnifiedTopology:true,
//         });
//         console.log("DB Connected !");
//         console.log("DB name : ",conn.connection.name);

//     }catch(err){
//         console.log("DB error :",err);
//     }
// }

// // connectDatabase();
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT,() => {
    console.log(`Server listening on PORT: ${PORT}`);
});

app.use(
    cors({
        origin:['http://localhost:3001'],
        methods:["GET","PUT","POST","DELETE"],
        credentials:true,    
    })
);

app.use(express.json());