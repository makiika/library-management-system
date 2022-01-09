import React, { useContext } from 'react'
import MaterialTable from 'material-table';
import { tableIcons } from '../utils/tableIcons';
import { bookContext, } from '../../context/booksContext';
import { userContext } from '../../context/userContext';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import axios from 'axios'



const IssuedBook = () => {
  
  const { users } = useContext(userContext)
  const { books, setReturned, returned, borrowedBooks, setBorrowedBooks } = useContext(bookContext)

  const usersObj = users.reduce((userObj, user) => {
    return { ...userObj, [user.id]: user.studentName }
  }, {})
  const booksObj = books.reduce((booksObj, book) => {
    return { ...booksObj, [book.id]: book.bookName }
  }, {})


  const clearBook = (id) => {
    setReturned(true)
    const data = {
      id: id,
      returned: returned
    }
    axios.put('http://localhost:3002/book/returnBook', data).then(({ data }) => {
      const Books = borrowedBooks.filter((book) => (book.id !== data))
      setBorrowedBooks(Books)
    })
  }

  const columns = [
    { title: 'Student Name', field: 'StudentId', sorting: false, lookup: usersObj },
    { title: 'Book Name', field: 'BookId', lookup: booksObj },
    { title: 'Remaining Time', field: 'returnDate' },
  ]
  
  return (

    <div>
      <MaterialTable
        title='BORROWED BOOKS'
        icons={tableIcons}
        columns={columns}
        data={borrowedBooks}
        actions={[
          {
            icon: MenuBookIcon,
            tooltip: `clear user`,
            onClick: (event, rowData) => {
              clearBook(rowData.id)

            }
          }
        ]}
        options={{
          rowStyle: {
            backgroundColor: '#e1f2',
          },
          headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
          },
          search: true,
          sorting: true,
          paging: false,
          actionsColumnIndex: -1,
          addRowPosition: 'first'

        }}
      />

    </div>
  )
}

export default IssuedBook
