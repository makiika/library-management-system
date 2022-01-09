const express = require('express')
const router = express.Router()
const {addBook,getBooks,getBook,
        issueBook,getIssuedBooks,
        borrowedBooks,returnBook} = require('../controllers/bookController')
const authorize = require('../middlewares/authorize')


router.post('/addBook',addBook)

router.get('/getBooks',getBooks)

router.get('/getBook/:bookId',getBook)

router.post('/issueBook',issueBook)

router.get('/getIssuedBooks',getIssuedBooks)

router.get('/borrowedBooks',borrowedBooks)

router.put('/returnBook',returnBook)


module.exports = router
