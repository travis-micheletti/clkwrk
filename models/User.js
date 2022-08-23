const mongoose = require ('../db/connection')

const UserSchema = new mongoose.Schema(
    {
       firstName: {
        type: String,
        required: true
       },
       lastName: {
        type: String,
        required: true
       },
       email: {
        type: String,
        required: true
       },
       newUser: {
        type: Boolean,
        required: true,
        default: true
       },
       userType: {
        type: String,
        required: true,
        default: 'Supervisor'
       }
    }
)

const User = mongoose.model('User', UserSchema)

module.exports = User