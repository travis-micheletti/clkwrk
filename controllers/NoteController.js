const express = require('express')

const router = express.Router()

const Note = require('../models/Note')

// ROUTES

// CRUD:

// Create - to create a new note
router.post('/', async (req, res, next) => {
    try {
        const newNote = await Note.create(req.body)
        res.json(newNote)
    } catch(err) {
        next(err)
    }
})

// Read all - get all notes
router.get('/', async(req, res, next) => {
    try {
        const notes = await Note.find({})
        res.json(notes)
    } catch(err) {
        next(err)
    }
})

// Update - Update one note
router.put('/:id', async (req, res, next) => {
    try {
        const updateNote = await Note.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        )
        res.json(updateNote)
    } catch (err) {
        next(err)
    }
})

// Delete - Delete a note 
router.delete('/:id', async (req, res, next) =>  {
    try {
        const deleteNote = await Note.findByIdAndDelete(req.params.id)
        res.json(deleteNote)
    } catch (err) {
        next(err)
    }
})