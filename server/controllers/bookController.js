const {Books,BorrowedBooks} = require('../models')

const addBook = async(req,res)=>{
    const book = req.body;
    try{
        await Books.create(book).then((book)=>{
            res.status(200).json(book)
        })
    }catch(error){
        console.log(error)
    }
}

const getBooks = async(req,res)=>{
    try{
        await Books.findAll({include:[BorrowedBooks]}).then((books)=>{
            res.status(200).json(books)
        })
    }catch(error){
        console.log(error)
    }
}
const borrowedBooks = async(req,res)=>{
    try{
        await BorrowedBooks.findAll().then((borrowedBooks)=>{
            console.log(borrowedBooks)
            res.status(200).json(borrowedBooks)
            
        })
    }catch(error){
        console.log(error)
    }
}

const getBook = async(req,res)=>{
    const bookId = req.params.bookId
    try{
        await Books.findByPk(bookId).then((book)=>{
            res.status(200).json(book)
        })
    }catch(error){
        console.log(error)
    }
}
const issueBook = async(req,res)=>{
    const issuedbook = req.body;
    try{
        await BorrowedBooks.create(issuedbook).then((issuedbook)=>{
            res.status(200).json(issuedbook)
        })
    }catch(error){
        console.log(error)
    }
}

const getIssuedBooks = async(req,res)=>{
    try{
        await BorrowedBooks.findAll({attributes:{exclude:['createdAt','updatedAt']}}).then((issuedBooks)=>{
            res.status(200).json(issuedBooks)
        })
    }catch(error){
        console.log(error)
    }
}
const returnBook = async(req,res)=>{
    const {returned,id} = req.body;
    await BorrowedBooks.update({returned:returned},{where:{id:id}}).then((books)=>{
        res.json(id)
    })

}

module.exports = {
    addBook,
    getBooks,
    getBook,
    issueBook,
    getIssuedBooks,
    borrowedBooks,
    returnBook
}