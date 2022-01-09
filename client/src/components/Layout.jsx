import React from 'react'
import {makeStyles,Divider,Box} from '@material-ui/core'
import { useHistory, useLocation } from 'react-router-dom'
import {Drawer,List,ListItem,ListItemText,ListItemIcon} from '@material-ui/core'
import { menu } from './utils/menu'

const useStyles = makeStyles({
    active: {
        backgroundColor: 'blue',
        color: 'white'
    },
    layout:{
        display:'flex',
        paddingTop:40,
        paddingLeft:40,
        paddingRight:20,

    },
    page:{
        width:'100%'
    },
    drawer:{
        width:300,
        
    },
    drawerPaper:{
        width:300,
    }
})

const Layout = ({children}) => {
    const history = useHistory()
    const classes = useStyles()
    const location = useLocation()
    return (
        <div className={classes.layout}>
            
            <div >
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                anchor = 'left'
                classes  = {{paper:classes.drawerPaper}}
                >
                <Box textAlign='center'>
                <List>
                    {
                        menu.map((item,key)=>{
                            return(
                                <ListItem
                                    className={location.pathname === item.path ? classes.active : null}
                                  button
                                  key={item.text}
                                  onClick={()=>history.push(item.path)}
                                  >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text}/>
                                 </ListItem>
                            )    
                        })
                    }
                </List>
                <Divider/>
                </Box>
                
                             
            </Drawer>
            
            </div>
           <div className={classes.page}>
           {children}
           </div>           
        </div>
    )
}

export default Layout
