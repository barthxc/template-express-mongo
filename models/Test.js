import mongoose, { mongo } from "mongoose";

const testSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim:true
    }
});

const Test = mongoose.model('Tests', testSchema);

export default Test;