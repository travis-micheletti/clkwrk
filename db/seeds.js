const Employee = require('../models/Employee')
const User = require('../models/User')
const employeeSeeds = require('./employees.json')
const userSeeds = require('./users.json')

Employee.deleteMany({})
    .then(() => {
        return Employee.insertMany(employeeSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })

User.deleteMany({})
    .then(() => {
        return User.insertMany(userSeeds)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit()
    })