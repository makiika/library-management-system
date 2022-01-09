import React,{useContext} from 'react'
import MaterialTable from 'material-table';
import { tableIcons } from '../utils/tableIcons';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { userContext } from '../../context/userContext';
import { studentColumns } from '../utils/columns';
import { useHistory } from 'react-router-dom';


const Students = () => {
    const {users,setStudentId} = useContext(userContext)
    const history = useHistory()
   
       
     
    return (
        <div>
              <MaterialTable
         title='SELECT STUDENT'
         icons={tableIcons}
            columns= {studentColumns}
            data={users}
            actions={[
              {
                icon:MenuBookIcon,
                tooltip: `select student`,
                onClick: (event, rowData) => {
                  setStudentId(rowData.id)
                  history.push('/issuebookx')
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

export default Students
