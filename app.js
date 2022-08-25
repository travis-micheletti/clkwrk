// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Config
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const express = require('express')
const app = express()
const cors = require('cors')
// const { auth, requiresAuth } = require('express-openid-connect')
require('dotenv').config()
require('./db/connection')


// config variable for auth
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER_BASE_URL
//   };

const port = process.env.PORT || 8000
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Middleware
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// for parsing app/request data and adding to request.body
app.use(express.json())


// for parsing urlencoded data and adding to request object
app.use(express.urlencoded({ extended: true }))

// auth router attaches /login, /logout, and /callback routes to the baseURL
// app.use(auth(config));

app.use(cors())

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Routes
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// req.isAuthenticated is provided from the auth router
// app.get('/', (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
// });

// // basic profile route for logged-in user - > change to home screen
// app.get('/home', requiresAuth(), (req, res) => {
//     res.send(JSON.stringify(req.oidc.user))
//     console.log(req.oidc.user)
// })

// Controllers

const usersController = require('./controllers/UserController')
app.use('/users', usersController)

const employeesController = require('./controllers/EmployeeController')
app.use('/employees', employeesController)

const notesController = require('./controllers/NoteController')
app.use('/notes', notesController)

// Handle Errors

app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Start Server
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.listen(port, () => {
    console.log(`✅ ✅ ✅ Port: ${port}!`)
})