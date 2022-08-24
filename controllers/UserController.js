const express = require('express')

const router = express.Router()

const User = require('../models/User')

// ROUTES

// CRUD:

// Create - to create a new user
router.post('/', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } catch(err) {
        next(err)
    }
})

// Read all - get all users
router.get('/', async(req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch(err) {
        next(err)
    }
})

// Read one - Get one User
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        res.json(user)
    } catch(err) {
        next(err)
    }
})

// Update - Update one user
router.put('/:id', async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        res.json(updateUser)
    } catch (err) {
        next(err)
    }
})

// Delete - Delete User 
router.delete('/:id', async (req, res, next) =>  {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.json(deleteUser)
    } catch (err) {
        next(err)
    }
})

module.exports = router