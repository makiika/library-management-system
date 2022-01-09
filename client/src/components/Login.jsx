
import React from 'react'
import {TextField,makeStyles,Button} from '@material-ui/core'
import * as Yup from 'yup'
import {useFormik} from 'formik'

const useStyles = makeStyles({
 form:{
       borderBlockColor:"green",
       display:'flex',
       flexDirection:'column',
       width:400,
       marginLeft:"auto",
       marginRight:'auto',
       marginTop:150

 },
})


const Login = () => {
   
    const validationSchema = Yup.object({
        username:Yup.string().required('username is required'),
        password:Yup.string().required('please enter your password').min(4).max(15)

    })
    const classes = useStyles()
    const formik = useFormik({
        initialValues:{
            username:'',
            password:''
        },
        onSubmit(values,onSubmitProps){
            console.log(values)
           onSubmitProps.resetForm()
          
        },
        validationSchema : validationSchema
    })
    return (
        <div>
                <form className={classes.form}
                noValidate 
                 onSubmit={formik.handleSubmit}>
                <TextField
                className={classes.input}
                 label='Username'
                 type='text'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='username'
                 margin='normal'
                 value={formik.values.username}
                 onChange={formik.handleChange}
                 error={formik.touched.username && Boolean(formik.errors.username)}
                 helperText={formik.touched.username && formik.errors.username}
                 onBlur={formik.handleBlur}
                />
                <TextField
                className={classes.input}
                 label='Password'
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
                 className={classes.btn}
                >Login</Button>
            </form>
            </div>
    )
}

export default Login
