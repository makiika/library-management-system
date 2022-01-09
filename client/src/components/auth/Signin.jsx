import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Button, makeStyles, Box } from '@material-ui/core'
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height:'98vh',
    },
    form:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow:1,
        width: '30vw',
        height: '30vh',
        alignContent:'center'
    },
    formContainer:{
        padding:theme.spacing(6)
    },
    input:{
        padding: theme.spacing(2),
        borderRadius: theme.spacing(2),
        borderColor:'blue'
    },
    formBtn: {
        marginTop: theme.spacing(2),
        border:'none'
    },
    label:{
       textAlign:'center',
        fontSize: theme.spacing(3)
    }

}))


const Signin = () => {
    let history = useHistory()
    const classes = useStyles()
    const validationSchema = Yup.object({
        email: Yup.string().email('Enter valid email'),
        password: Yup.string(),

    })

    const initialValues = {
        email: '',
        password: '',
    }

    const handleLogin = (data, onSubmitProps) => {
        axios.post(`http://localhost:3002/auth/admin/signIn`, data).then((response) => {
                sessionStorage.setItem('token',response.data)
                history.push('/home')
            
        }).catch((error) => {
            console.log(error)
        })
        onSubmitProps.resetForm()
    }
    return (
        <Box className={classes.root}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}>
                <Paper  className={classes.formContainer}>
            
                    <Form className={classes.form} >
                        <label className={classes.label} >Email</label>
                    <Field
                        className={classes.input}
                        autoComplete="off"
                        name="email"
                        type='email'
                        placeholder='example@gmail.com'
                    />
                    <ErrorMessage name='email' component='span'/>
                        <label className={classes.label}>Password</label>
                    <Field
                        className={classes.input}
                        autoComplete="off"
                        name="password"
                        type='password'
                    />
                    <Button
                        className={classes.formBtn}
                        variant='contained'
                        type='submit'
                        color='primary'
                    >Login</Button>
                </Form>
            </Paper >
            </Formik>
            

        </Box>
    )
}

export default Signin
