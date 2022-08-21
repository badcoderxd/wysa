const onboardingResponse = require('../../../models/user/onBoarding/onBoardingModal');

exports.insertAOnBoardingAnswer = async (req, res) => {
    try{
        const questionId = req.params.q_id;
        const {answer, user} = req.body;
        let response_new = new onboardingResponse({
            question_id:questionId,
            user:user,
            answer:answer
        })
        const insertedResponse = await response_new.save();
        res.status(200).json(insertedResponse);
    }
    catch(err){
        console.log(err);
    }
}

exports.getAuserResponse = async (req, res) => {
    try{
        const { user } = req.params;

        const getListOfResponse = await onboardingResponse.find({user:user}).populate("question_id");
        res.status(200).json(getListOfResponse);
    }
    catch(err){
        console.log(err);
    }
}

exports.editAUserResponse = async (req, res) => {
    try{
        const questionId = req.params.q_id;
        const {answer, user} = req.body;

        const updatedResponse = await onboardingResponse.findOneAndUpdate({question_id:questionId,user:user},
            {
                answer:answer
            });
        const afterUpdate = await onboardingResponse.findOne({question_id:questionId,user:user});
        res.status(200).json(afterUpdate);
    }
    catch(err){
        console.log(err);
    }
}