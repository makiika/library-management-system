import React from 'react'
import {TextField,makeStyles,Button} from '@material-ui/core'
import * as Yup from 'yup'
import {useFormik} from 'formik'
import axios from 'axios'
import { useHistory } from 'react-router-dom' 

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height:'98vh',
    },
    form:{
          borderBlockColor:"green",
          display:'flex',
          flexDirection:'column',
          width:400,
          marginLeft:"auto",
          marginRight:'auto',
   
    },
   })

const SignUp = () => {
    const history = useHistory()
    const validationSchema = Yup.object({
        userName:Yup.string().required('userName is required'), 
        email:Yup.string().email('Enter valid email').required('emial is required'),
        password: Yup.string().required('password is required'),

    })
    const classes = useStyles()
    const formik = useFormik({
        initialValues:{
            userName:'',
            email:'',
            password: '',
        },
        validationSchema : validationSchema,
       async onSubmit(values){
           axios
                .post('http://localhost:3002/auth/admin/signUp',values)
                .then((response) => { 
                    console.log(response.data)
                    history.push('/signin')
                })
                .catch((error) =>{ console.log(error) })
        },     
    })
    return (
        <div className = { classes.root }>
            <form className={classes.form}
                noValidate 
                 onSubmit={formik.handleSubmit}>
                <TextField
                 label='userName'
                 type='text'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='userName'
                 margin='normal'
                 value={formik.values.userName}
                 onChange={formik.handleChange}
                 error={formik.touched.userName && Boolean(formik.errors.userName)}
                 helperText={formik.touched.userName && formik.errors.userName}
                 onBlur={formik.handleBlur}
                />
                <TextField
                 label='email'
                 type='email'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='email'
                 margin='normal'
                 value={formik.values.email}
                 onChange={formik.handleChange}
                 error={formik.touched.email && Boolean(formik.errors.email)}
                 helperText={formik.touched.email && formik.errors.email}
                 onBlur={formik.handleBlur}
                />
                  <TextField
                 label='password'
                 type='password'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='password'
                 margin='normal'
                 value={formik.values.password}
                 onChange={formik.handleChange}
                 error={formik.touched.password && Boolean(formik.errors.password)}
                 helperText={formik.touched.password && formik.errors.password}
                 onBlur={formik.handleBlur}
                />
                <Button 
                 variant='outlined'
                 type='submit'
                >Register user</Button>
            </form>
            
        </div>
    )
}

export default SignUp
