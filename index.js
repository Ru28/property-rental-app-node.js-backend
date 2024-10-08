require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user')
const propertyRoute = require('./routes/property');


const app = express();
mongoose.connect(process.env.MONGO_URI).
then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use('/auth',userRoute);
app.use('/property',propertyRoute);



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})
