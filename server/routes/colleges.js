
const express = require('express')
const router = express.Router()
const {addCollege,getColleges} = require('../controllers/CollegeController')
const authorize = require('../middlewares/authorize')


router.post('/addCollege',addCollege)

router.get('/getColleges',getColleges)


module.exports = router
