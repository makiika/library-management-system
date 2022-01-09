import React,{useContext} from 'react'
import { tableIcons } from '../utils/tableIcons';
import MaterialTable from 'material-table';
import { bookContext } from '../../context/booksContext';
import { booksUsege } from '../utils/columns';

const BooksUsege = () => {

    const {books} = useContext(bookContext)
    return (
        <div>
        <MaterialTable
                title='BOOK USAGE'
                icons={tableIcons}
                    columns= {booksUsege}
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

export default BooksUsege
