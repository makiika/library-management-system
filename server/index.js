require('dotenv').config()
const express = require('express')
const app = express();
const cors = require('cors')
const db = require('./models')
const authRouter = require('./routes/auth')
const bookRouter = require('./routes/books')
const studentRouter = require('./routes/student')
const collegeRouter = require('./routes/colleges')
// const { sendMail } = require('./utils/mail')


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.use('/auth/admin', authRouter)
app.use('/book', bookRouter)
app.use('/student', studentRouter)
app.use('/college', collegeRouter)
const cron = require('node-cron')
// sendMail()


db.sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('server started on port 3002')

    })
})
