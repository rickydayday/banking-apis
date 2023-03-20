const asyncHandler = require('express-async-handler')

const Api = require('../model/apiModel');
const Subscriber = require('../model/subscriber')
const CreateAccount = require('../model/createAccount')

//@route /bank/accountbalance GET Account Balance
const getAccountBalance = asyncHandler(async (req,res) => {
    const apis = await Api.find()

    res.status(200).json(apis)
})


//@route /bank/accountdetails  Get methodAccount Details
const getAccountDetails = asyncHandler(async(req,res) => {

    res.status(200).json(apis)
})


//@route /bank/internal-transfer POST Internal Transfers
const sendTransfer = async(req,res) =>{
 const goalSubscriber = new Subscriber({

    name: req.body.name,
    subscribedToChannel: req.body.subscribedToChannel,
    subscribeDate : req.body.subscribeDate

 })

 
   
    res.status(200).json(goalSubscriber)


}
//@route /api/bank/create-account
const accountCreation = async (req, res)=>{

    const createaccount = new CreateAccount({
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        phoneNumber : req.body.phoneNumber,
        kraPinNumber: req.body.kraPinNumber,
        documentType: req.body.documentType,
        email:req.body.email,
        accountType: req.body.accountType,
        creationDate: req.body.creationDate

    })

    try {
        const newCreatedAccount = await createaccount.save()
        res.status(201).json(newCreatedAccount)
      } catch (err) {
        res.status(400).json({ message: err.message })
      }



    // res.status(200).json(createaccount)


}




module.exports = {
    getAccountBalance, getAccountDetails, sendTransfer, accountCreation
}