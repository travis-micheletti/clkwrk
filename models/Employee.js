const mongoose = require ('../db/connection')

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    hireDate: {
        type: Date,
        required: true
    },
    laborCode: Number,
    department: String,
    shift: String,
    room: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    employeeType: {
        type: String,
        required: true
    },
    employeeLog: { type: mongoose.Schema.Types.ObjectId }
})

const Employee = mongoose.model('Employee', EmployeeSchema)

module.exports = Employee