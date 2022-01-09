import React, { createContext, useState, useEffect } from "react"
import axios from 'axios'
export const bookContext = createContext()


const BooksContextProvider = ({ children }) => {

    const [books, setBooks] = useState([])
    const [bookId, setBookId] = useState('')
    const [borrowedBooks, setBorrowedBooks] = useState([])
    const [returned, setReturned] = useState(false)

    const registerBook = (data) => {
        axios.post('http://localhost:3002/book/addBook', data).then(({ data }) => {
            const book = {
                bookName: data.bookName,
                authorName: data.authorName,
                bookEdition: data.bookEdition,
                totalCopies: data.totalCopies
            }
            setBooks([book, ...books])
        })
    }
    const getBorrowedBooks = async () => {
        await axios.get('http://localhost:3002/book/getIssuedBooks').then(({ data }) => {
            const borrowedBooks = data.filter((book) => (book.returned !== true))
            setBorrowedBooks(borrowedBooks)
        })
    }
    const getBooks = async () => {
        await axios.get('http://localhost:3002/book/getBooks').then((response) => {
            console.log(response)
            setBooks(response.data)
        })
    }

    useEffect(() => {
        getBooks()
        getBorrowedBooks()
    }, [])

    return (<bookContext.Provider value={{
        books,
        bookId,
        setBookId,
        registerBook,
        returned,
        setReturned,
        setBooks,
        setBorrowedBooks,
        borrowedBooks,
    }
    } > {children}
    </bookContext.Provider>
    )
}

export default BooksContextProvider