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
   
    },
   })

const RegisterUsers = () => {
    
    const validationSchema = Yup.object({
        firstName:Yup.string().required('firstName is required'),
        lastName:Yup.string().required('lastName is required'),
        email:Yup.string().email('Enter valid email').required('emial is required')

    })
    const classes = useStyles()
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:''
        },
        validationSchema : validationSchema,
       async onSubmit(values){
            console.log(values)

        },
      
    })
    return (
        <div>
            <form className={classes.form}
                noValidate 
                 onSubmit={formik.handleSubmit}>
                <TextField
                 label='firstName'
                 type='text'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='firstName'
                 margin='normal'
                 value={formik.values.firstName}
                 onChange={formik.handleChange}
                 error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                 helperText={formik.touched.firstName && formik.errors.firstName}
                 onBlur={formik.handleBlur}
                />
                <TextField
                 label='lastName'
                 type='text'
                 variant='outlined'
                 required
                 autoComplete='off'
                 name='lastName'
                 margin='normal'
                 value={formik.values.lastName}
                 onChange={formik.handleChange}
                 error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                 helperText={formik.touched.lastName && formik.errors.lastName}
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
                <Button 
                 variant='outlined'
                 type='submit'
                >Register user</Button>
            </form>
            
        </div>
    )
}

export default RegisterUsers
