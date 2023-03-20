const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
    firstName: {
    type: String,
    required: [true, 'First Name Field should be included']
  },
    middleName: {
    type: String,
    required: true
  },
   phoneNumber: {
    type: String,
    required: true
  
  },

  kraPinNumber:{
    type: String,
    required:true
  },

  documentType: {
        type: String,
        required: true
   },

  email: {
    type: String,
    required: true

   },

  accountType:{
    type: String,
    required: true

  },

  creationDate: {
    type: Date,
    required: true,
    default: Date.now
  }






  }
)

module.exports = mongoose.model('CreateAccount', subscriberSchema)