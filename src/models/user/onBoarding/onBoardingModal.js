const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const onBoarding = new mongoose.Schema({
    user:{
            type:String,
            required:true
    },
    question_id:{
            type: Schema.Types.ObjectId,
            ref:'admin_onboarding',
            required:true,
    },
    answer:{
            type:String,
            required:true
    },
    is_active:{
        type:Boolean,
        required:true,
        default:false
    },
    is_deleted:{
        type:Boolean,
        required:true,
        default:false
    }
},{ timestamps:true });

module.exports = mongoose.model('user_onboarding',onBoarding);