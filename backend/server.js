const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());


// mongodb connection 
mongoose.connect("mongodb://localhost:27017/table_tracker")
.then(()=> {console.log("Connection established")})
.catch((err)=> {console.log("Error connecting")})

//schema 

const tableSchema = new mongoose.Schema({
    tracker_id:{type:Number, required:true},
    tracker_number:{type:Number, required:true},
    tracker:{type:String, required:true},
    grid_view:{type:String, required:true},
    card_view:{type:String, required:true},
    create:{type:String, required:true},
    edit:{type:String, required:true},
    delete:{type:String, required:true},
    filter:{type:String, required:true},
    sort:{type:String, required:true},
    link:{type:String, required:true},
    secured:{type:String, required:true},
    tracker_info:{type:String},
    status:{type:String, required:true},
    external:{type:String, required:true}
})

const tableModel=new mongoose.model("tables",tableSchema);


// to create 

app.post("/table",(req, res)=>{
    let table = req.body;
    let tableObj = new tableModel(table);

    tableObj.save()
    .then(()=> {
        res.send({message:"Table created"})
    })
    .catch((err)=> {
        console.log(err);
        res.send({message:"Some problem"})
    })

})
// to get 

app.get("/table",(req, res)=>{
    tableModel.find()
    .then((table)=> {
        res.send(table);
    })
    .catch((err)=> {
        console.log(err);
        res.send({message:"Some problem"})
    })

})

app.listen(8000);