import React from 'react'
import {TextField,Paper,Button,makeStyles} from '@material-ui/core'
import {useFormik} from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { api } from '../../utils/APi'

const useStyles = makeStyles((theme)=>{
    return({
        form:{
            display:'flex',
            flexDirection:'column',
            margin:theme.spacing(4)
        },
        formPaper:{
            width:'30%',
            margin:'auto',
            marginTop:'300px'
        },
        formBtn:{
            marginTop:theme.spacing(2)
        }
    })})

const Login = () => {
   const classes = useStyles()

   const handleLogin = (data)=>{
       axios.post(`${api}/auth/admin/signIn`,data).then((response)=>{
        console.log(response.data)
       }).catch((error)=>{
           console.log(error)
       })

   }
   const validationSchema = yup.object({
        email:yup.string().required('email is required'),
        password:yup.string().required('Enter password')
    })
   
    const formik = useFormik({
        validationSchema:validationSchema,
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:(values, onSubmitProps)=>{
            console.log(values)
            handleLogin(values)
            onSubmitProps.resetForm()
        }
    })

    return (
        < Paper variant='outlined' className={classes.formPaper} >
            <form 
                className={classes.form}
                noValidate
                autoComplete='off'
                onSubmit={formik.handleSubmit}
            >
                <TextField 
                    variant='outlined'
                    label='email'
                    type='email'
                    margin='normal'
                    name='email'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}    
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    onBlur={formik.handleBlur}            
                />
                <TextField 
                    variant='outlined'
                    label='password'
                    type='password' 
                    margin='normal' 
                    name='password'
                    required
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    onBlur={formik.handleBlur}             
                />
                <Button
                    variant='outlined'
                    type='submit'
                    className={classes.formBtn}
                >Login</Button>
            </form>
            
        </Paper>
    )
}

export default Login
