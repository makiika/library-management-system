import React from 'react'
import PeopleIcon from '@material-ui/icons/People';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';

export const menu =[
    {text:'Home',
    path:'/',
    icon:<HomeIcon color='primary'/>
},
    {text:'Add Book',
    path:'/addbook',
    icon:<PlusOneIcon color='primary'/>
    },
    {text:'List of Books',
     path:'/books',
    icon:<LibraryBooksIcon color='primary'/>
    },
    {text:'Issued Books',
    path:'/issuedBooks',
    icon:<LibraryBooksIcon color='primary'/>
    },
    {text:'Books Usage',
    path:'/bookusege',
    icon:<LibraryBooksIcon color='primary'/>
    },
    {text:'Issue Book',
    path:'/users',
    icon:<PeopleIcon color='primary'/>
    }
    
]