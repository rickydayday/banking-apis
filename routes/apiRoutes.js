const express = require('express');
const router = express.Router();
const {getAccountBalance, sendTransfer, accountCreation} = require('../controllers/bankapicontroller')


router.get('/api/bank/', getAccountBalance)

router.post('/api/bank/internal-transfer', sendTransfer)

router.post('/api/bank/create-account', accountCreation)


module.exports= router;