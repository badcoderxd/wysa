const onboardingQuestions = require('../../../models/admin/onBoarding/onBoardingModal');

exports.addAOnBoardingQuestion = async (req, res) => {
    try{
        const {isMcq,question,options} = req.body;
        let question_new = new onboardingQuestions({
            isMcq:isMcq,
            question:question,
            options:options
        })
        let insertedQuestion = await question_new.save();
        res.status(200).json(insertedQuestion);
    }
    catch(err){
        console.log(err)
    }
}

exports.getAllOnBoardingQuestions = async (req, res) => {
    try{
        let allQuestions = await onboardingQuestions.find();
        res.status(200).json(allQuestions);
    }
    catch(err){
        console.log(err);
    }
}

exports.makeQuestionActiveOrInactive = async (req, res) => {
    try{
        const question_id = req.params.q_id;
        const active_status = req.body.activeStatus;
        let makeItActive = await onboardingQuestions.findByIdAndUpdate(question_id,{is_active:active_status});
        let res_query = await onboardingQuestions.findById(question_id);
        res.status(200).json(res_query);
    }
    catch(err){
        console.log(err)
    }
}

exports.softDeleteAQuestion = async (req, res) => {
    try{
        const question_id = req.params.q_id;
        const delete_status = req.body.deleteStatus;
        let makeItDeleted = await onboardingQuestions.findByIdAndUpdate(question_id,{is_deleted:delete_status});
        let res_query = await onboardingQuestions.findById(question_id);
        res.status(200).json(res_query);
    }
    catch(err){
        console.log(err)
    }
}

exports.editAQuestion = async (req, res) => {
    try{
        const question_id = req.params.q_id;
        const {isMcq,question,options} = req.body;
        let makeItActive = await onboardingQuestions.findByIdAndUpdate(question_id,
            {
                isMcq:isMcq,
                question:question,
                options:options
            });
        let res_query = await onboardingQuestions.findById(question_id);
        res.status(200).json(res_query);
    }
    catch(err){
        console.log(err)
    }
}