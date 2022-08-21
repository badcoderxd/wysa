const express = require('express');
const { addAOnBoardingQuestion, getAllOnBoardingQuestions, makeQuestionActiveOrInactive, editAQuestion, softDeleteAQuestion } = require('../../../controller/admin/OnBoarding/OnBoardingController');
const router = express.Router();

router.post('/onboarding', addAOnBoardingQuestion);

router.get('/getAllQuestions', getAllOnBoardingQuestions);

router.put('/onboarding/:q_id',makeQuestionActiveOrInactive);

router.patch('/onboarding/:q_id',editAQuestion);

router.delete('/onboarding/:q_id',softDeleteAQuestion);

module.exports = router;