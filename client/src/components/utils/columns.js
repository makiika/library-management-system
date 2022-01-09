
export const studentColumns = [
    { title: 'Student Name', field: 'studentName'},
    { title: 'Personal Number', field: 'personalNumber',sorting:false,},
    { title: 'College', field: 'college',sorting:false,},
    { title: 'email', field: 'email',sorting:false},]

  // this is the section to where changes have to be made.  
export const booksColumns = [
        { title: 'Book Name', field: 'bookName'},          
        { title: 'Auther Name', field: 'authorName'},
        { title: 'Book Edition', field: 'bookEdition',sorting:false },
        { title: 'Total Copies', field: 'totalCopies',type:'numeric',sorting:false},
      ]

export const issueBooksColumns =  [
  { title: 'Book Name', field: 'bookName'},         
  { title: 'Auther Name', field: 'authorName'},
  { title: 'Book Edition', field: 'bookEdition',sorting:false },
]
export const booksUsege =  [
  { title: 'Book Name', field: 'bookName',sorting:false}, 
  { title: 'Usage', field: 'BorrowedBooks',render:(row)=>row.BorrowedBooks.length },         
  { title: 'Auther Name', field: 'authorName',sorting:false},
  { title: 'Book Edition', field: 'bookEdition',sorting:false },
  
]




