const mongoose = require ('../db/connection')

const NoteSchema = new mongoose.Schema(
    {
        date: Date.now,
        employee: Object,
        type: String,
        comment: String,
        author: {
            type: String,
            required: true
        }
    },
    { 
        timestamps: true
    }
)

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note