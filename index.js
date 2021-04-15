const express = require('express');
const mongoose = require("mongoose");
const port = process.env.port || 5454;
const app = express();
const ONLINE_DB =
"mongodb+srv://Justina:justina@cluster0.qxq3a.mongodb.net/company?retryWrites=true&w=majority"

mongoose.connect(ONLINE_DB,{
    useCreateIndex: true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(()=>{
    console.log(`Database is active`)
})
app.use(express.json());
app.use("/", require("./Component/Controller"))


app.listen(port,()=>{
    console.log(`port is listening`);
})