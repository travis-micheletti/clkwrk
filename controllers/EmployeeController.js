const express = require('express')

const router = express.Router()

const Employee = require('../models/Employee')

// ROUTES

// CRUD:

// Create - to create a new user
router.post('/', async (req, res, next) => {
    try {
        const newEmployee = await Employee.create(req.body)
        res.json(newEmployee)
    } catch(err) {
        next(err)
    }
})

// Read all - get all employees
router.get('/', async(req, res, next) => {
    try {
        const employees = await Employee.find({})
        res.json(employees)
    } catch(err) {
        next(err)
    }
})

// Read one - Get one User
router.get('/:id', async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    } catch(err) {
        next(err)
    }
})

// Update - Update one employee
router.put('/:id', async (req, res, next) => {
    try {
        const updateEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        res.json(updateEmployee)
    } catch (err) {
        next(err)
    }
})

// Delete - Delete employee 
router.delete('/:id', async (req, res, next) =>  {
    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.json(deleteEmployee)
    } catch (err) {
        next(err)
    }
})

module.exports = router