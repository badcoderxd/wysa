const express = require('express');
const { insertAOnBoardingAnswer, editAUserResponse, getAuserResponse } = require('../../../controller/user/OnBoarding/OnBoardingResponse');
const router = express.Router();

router.post('/user/onboarding/:q_id', insertAOnBoardingAnswer);

router.patch('/user/onboarding/:q_id', editAUserResponse);

router.get('/user/onboarding/:user', getAuserResponse);

module.exports = router;