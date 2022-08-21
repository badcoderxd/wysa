const mongoose = require('mongoose');

const onBoarding = new mongoose.Schema({
    isMcq: {
        type:Boolean,
        required:true,
        default:false
    },
    question:{
            type: String,
            required:true,
    },
    options:[ String ],
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

module.exports = mongoose.model('admin_onboarding',onBoarding);