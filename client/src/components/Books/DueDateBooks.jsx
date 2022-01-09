import React,{useContext,useState,useEffect} from 'react'
import MaterialTable from 'material-table';
import { tableIcons } from '../utils/tableIcons';
import { bookContext } from '../../context/booksContext';
import { userContext } from '../../context/userContext';



const DueDateBooks = () => {
 const {borrowedBooks} = useContext(bookContext)
 const {users} = useContext(userContext)
 const {books} = useContext(bookContext)
 const [bookLookUP, setBookLookUP] = useState({})
 const [userLookUP, setUserLookUP] = useState({})
 

 const usersObj = users.reduce((userObj,user)=>{
  return {...userObj,[user.id]:user.studentName}
},{})
const booksObj = books.reduce((booksObj,book)=>{
  return {...booksObj,[book.id]:book.bookName}
},{})

 useEffect(() => {
   
    setBookLookUP(booksObj)
    setUserLookUP(usersObj)
    }
  ,[booksObj,usersObj])

  const columns = [
    { title: 'Student Name', field: 'StudentId',sorting:false,lookup:userLookUP},
    { title: 'Book Name', field: 'BookId',lookup:bookLookUP},
    { title: 'Due Date', field: 'returnDate'},
 ]
    
    return (

        <div>
         <MaterialTable
         title='BORROWED BOOKS'
         icons={tableIcons}
            columns= {columns}
            data = {borrowedBooks}
            
            options={{
              rowStyle: {
                backgroundColor: '#e1f2',
              },
              headerStyle: {
                backgroundColor: '#01579b',
                color: '#FFF'
              },
              search:true,
              sorting:true,
              paging:false,
              actionsColumnIndex:-1,
              addRowPosition:'first'
              
            }}
         />
        </div>
    )
}

export default DueDateBooks
