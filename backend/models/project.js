const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const projectSchema = new mongoose.Schema(
    {
        category: {
            type: ObjectId, 
            ref: 'Category', 
            required: true 
              
           },
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },
        desc: {
            type: String,
            required: true,
            maxlength:2000
        },
        body: {
            type: String,
            required: true,
            maxlength:2000
        },
        link1: {
            type: String,
            trim: true,
            required: true,
            maxlength:1000
        },
        link2: {
            type: String,
            trim: true,
            required: true,
            maxlength:1000
        },
       
        
        view: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        },
        
       
    },
    { timestamps: true }
);

module.exports = mongoose.model("project", projectSchema)