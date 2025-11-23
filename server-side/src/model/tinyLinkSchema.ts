import { Schema , model } from "mongoose";

const tinyLinkSchema = new Schema({
    code:{
        type:String,
        required:true,
        unique:true,
        match:/^[A-Za-z0-9]{6,12}$/
    },
    targetURL:{
        type:String,
        required:true,
    },
    clicks:{
        type:Number,
        default:0
    },
    lastClicked:{
        type:Date,
        default:null
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})


export const tinyLinkModel = model("tinyLink",tinyLinkSchema)