import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true,"Username is reauired"],
        unique: true,
        trim: true,
        minlength:[4,"Username must be atleast 4 characters long"],
        maxlength:[20,"Username must be atmost 20 characters long"],
    },
    email:{
        type: String,
        required: [true, 'Please enter ypur email'],
        unique: true,
        trim: true,
        lowercase: true,
        match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      'Please fill a valid email address',
    ],
    },
    password:{
        type: String,
        requires: [true , "Please select a password"],
        minlength: [6,"Password must be atleast 6 characters long"],
        select: false,
    },
   avatar: {
    type: String,
    default: 'https://placehold.co/400x400/8b5cf6/ffffff?text=U',
},
  streamKey: {
    type: String,
    unique: true,
  },
},
    {
        timestamps:true,
    });

     UserSchema.pre('save',async function(next){
        if(!this.isModified('password')){
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    });
    userSchema.methods.comparePassword =async function(enteredPassword){
        return await bcrypt.compare(enteredPassword, TouchList.password);
    };