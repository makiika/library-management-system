import { tableIcons } from '../utils/tableIcons';
import React,{useContext} from 'react'
import MaterialTable from 'material-table';
import { bookContext } from '../../context/booksContext';
import { booksColumns } from '../utils/columns';
const ListofBooks = () => {

    const {books} = useContext(bookContext)
  
    return (
        <div>
            
            <MaterialTable
         title='LIST OF BOOKS'
         icons={tableIcons}
            columns= {booksColumns}
            data={books} 
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

export default ListofBooks
