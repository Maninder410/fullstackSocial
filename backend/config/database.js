const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://maninder:maninder@cluster0.iw394ij.mongodb.net/?retryWrites=true&w=majority'
exports.connectDatabase = ()=>{
    mongoose.connect(MONGO_URI).then(console.log("database connected")).catch((err)=>console.log(err));
    
}