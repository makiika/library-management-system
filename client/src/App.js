
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import Signin from './components/auth/Signin'

// add this line of code in the this file
import SignUp from './components/auth/SignUp'
//the above line of code was added to this file.

const Login = React.lazy(() => import('./components/Login'))
const ListofBooks = React.lazy(() => import('./components/Books/ListOfBooks'))
const AddBook = React.lazy(() => import('./components/Books/AddBook'))
const IssuedBook = React.lazy(() => import('./components/Books/IssuedBook'))
const IssueBookx = React.lazy(() => import('./components/Books/IssueBookx'))
const BooksContextProvider = React.lazy(() => import('./context/booksContext'))
const UserContextProvider = React.lazy(() => import('./context/userContext'))
const BooksUsege = React.lazy(() => import('./components/Books/BooksUsege'))
const Students = React.lazy(() => import('./components/Users/Students'))
const DueDateBooks = React.lazy(() => import('./components/Books/DueDateBooks'))
const Home = React.lazy(() => import('./components/Home'))



function App() {
  return (
    <div>
      <Router>       
         
            <Switch>
              <Route exact path='/admin/signup' component={SignUp} />           
              <Route exact path='/signin' component={Signin} />
              <Layout>
                 <React.Suspense fallback={<div>Loading...</div>}>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <BooksContextProvider>
                <UserContextProvider>
                  <Route exact path='/addbook' component={AddBook} />
                  <Route exact path='/books' component={ListofBooks} />
                  <Route exact path='/bookusege' component={BooksUsege} />
                  <Route exact path='/issuedBooks' component={IssuedBook} />
                  <Route exact path='/users' component={Students} />
                  <Route exact path='/dueDateBooks' component={DueDateBooks} />
                  <Route exact path='/issuebookx' component={IssueBookx} />
                </UserContextProvider>
              </BooksContextProvider>
            </React.Suspense>
            </Layout>
            </Switch>
         
        
      </Router>
    </div>
  );
}

export default App;
