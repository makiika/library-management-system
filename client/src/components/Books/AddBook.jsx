import React, { useContext, useEffect } from 'react'
import { TextField, makeStyles, Button, Paper } from '@material-ui/core'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { bookContext } from '../../context/booksContext'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formPaper: {
        width: 400,
        marginLeft: "auto",
        marginRight: 'auto',
        marginTop: 150,
        paddingTop: 40,
        paddingBottom: 50,
        paddingLeft: 50,
        paddingRight: 40

    },
    submitBtn: {
        marginTop: 20
    }
})

const AddBook = () => {
    const history = useHistory()

    useEffect(() => {
        let token = sessionStorage.getItem('token')
        if (!token) {
            history.push('/signin')
        }
    })
    const { registerBook } = useContext(bookContext)
    const validationSchema = Yup.object({
        bookName: Yup.string().required('Please enter book name'),
        authorName: Yup.string().required('please enter author name'),
        bookEdition: Yup.string().required('Please add the book edition'),
        totalCopies: Yup.number().required('Please add the number of copies')

    })
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            bookName: '',
            authorName: '',
            bookEdition: '',
            totalCopies: ''
        },
        validationSchema: validationSchema,
        onSubmit(values, onSubmitProps) {
            registerBook(values)
            onSubmitProps.resetForm()
            history.push('/books')
        },

    })
    return (
        <Paper variant='outlined' className={classes.formPaper}>
            <form className={classes.form}
                noValidate
                autoComplete='off'
                onSubmit={formik.handleSubmit}>
                <TextField
                    label='bookName'
                    type='text'
                    variant='outlined'
                    required
                    name='bookName'
                    margin='normal'
                    value={formik.values.bookName}
                    onChange={formik.handleChange}
                    error={formik.touched.bookName && Boolean(formik.errors.bookName)}
                    helperText={formik.touched.bookName && formik.errors.bookName}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    label='authorName'
                    type='text'
                    variant='outlined'
                    required
                    name='authorName'
                    margin='normal'
                    value={formik.values.authorName}
                    onChange={formik.handleChange}
                    error={formik.touched.authorName && Boolean(formik.errors.authorName)}
                    helperText={formik.touched.authorName && formik.errors.authorName}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    label='bookEdition'
                    type='text'
                    variant='outlined'
                    required
                    name='bookEdition'
                    margin='normal'
                    value={formik.values.bookEdition}
                    onChange={formik.handleChange}
                    error={formik.touched.bookEdition && Boolean(formik.errors.bookEdition)}
                    helperText={formik.touched.bookEdition && formik.errors.bookEdition}
                    onBlur={formik.handleBlur}
                />
                <TextField
                    label='Number of Copies'
                    type='number'
                    variant='outlined'
                    name='totalCopies'
                    margin='normal'
                    value={formik.values.totalCopies}
                    onChange={formik.handleChange}
                    error={formik.touched.totalCopies && Boolean(formik.errors.totalCopies)}
                    helperText={formik.touched.totalCopies && formik.errors.totalCopies}
                    onBlur={formik.handleBlur}
                />
                <Button
                    variant='outlined'
                    type='submit'
                    className={classes.submitBtn}
                >Add Book</Button>
            </form>

        </Paper>
    )
}

export default AddBook
