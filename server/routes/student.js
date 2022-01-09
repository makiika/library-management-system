const express = require('express')
const router = express.Router()
const {registerStudent,getStudents} = require('../controllers/studentController')
const authorize = require('../middlewares/authorize')


router.post('/registerStudent',registerStudent)
router.get('/getStudents',getStudents)

module.exports = router
