import { tableIcons } from '../utils/tableIcons';
import React, { useState, useContext } from 'react'
import MaterialTable from 'material-table';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { useHistory } from 'react-router';
import { bookContext } from '../../context/booksContext';
import { issueBooksColumns } from '../utils/columns';
import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button, Box
} from '@material-ui/core'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { userContext } from '../../context/userContext';
import axios from 'axios'


const IssueBookx = () => {

  const { books, borrowedBooks, bookId, setBookId, setBorrowedBooks } = useContext(bookContext)
  let history = useHistory()
  const [returnDate, setReturnDate] = useState(null)
  const [open, setOpen] = useState(false)
  const { studentId, setStudentId } = useContext(userContext)
  const { returned } = useContext(bookContext)


  const issueBook = () => {
 
    const data = {
      BookId: bookId,
      StudentId: studentId,
      returnDate: returnDate.toLocaleDateString('en-GB'),
      returned: returned
    }
    console.log(data)
    axios.post('http://localhost:3002/book/issueBook', data).then(({ data }) => {
      setBookId('')
      setStudentId('')
    })
    const newBook = {
      returnDate: data.returnDate,
      returned: data.returned,
      BookId: data.BookId,
      StudentId: data.StudentId
    }
    setBorrowedBooks([newBook, ...borrowedBooks])
    setOpen(false)
    history.push('/issuedBooks')
  }

  const handleClose = () => {
    setOpen(false)

  }

  return (
    <div>
      <div>
        <MaterialTable
          title='SELECT BOOK'
          icons={tableIcons}
          columns={issueBooksColumns}
          data={books}
          actions={[
            {
              icon: MenuBookIcon,
              tooltip: `selected Book`,
              onClick: (event, rowData) => {
                setBookId(rowData.id)
                setOpen(true)

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
      <div>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>Select The return Date</DialogTitle>
          <DialogContent>
            <Box sx={{ p: 2, border: '1px solid blue', minWidth: 250, minHeight: 280 }}>
              <DatePicker
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
              />
            </Box>

          </DialogContent>
          <DialogActions>
            <Button variant='outlined' onClick={issueBook}>Issue Book</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>

  )
}

export default IssueBookx
