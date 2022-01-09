const { Admins } = require('../models')
const bcrypt = require('bcrypt')
const { sign } = require('jsonwebtoken')

const signUp = async (req, res) => {
    const { userName, email, password } = req.body;
    try {

        await Admins.findOne({ where: { email: email } }).then((userExist) => {
            if (userExist) {
                return res.status(404).json({ error: 'user already exists' })

            } else {
                bcrypt.hash(password, 10).then(async (hashedPassword) => {
                    await Admins.create({
                        userName: userName,
                        email: email,
                        password: hashedPassword
                    }).then((user) => res.status(200).json({messsage:"Account created successfully"}))

                })

            }

        })

    } catch (error) {
        console.log(error)
    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {

        await Admins.findOne({ where: { email: email } }).then((user) => {
            if (!user) {

                res.status(404).json({ error: "invalid email" })
            } else {
                bcrypt.compare(password, user.password).then((match) => {
                    if (!match) {

                        res.status(404).json({ error: 'invalid password' })
                    } else {

                        const Token = sign({ userName: user.userName, id: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" })                        
                        res.json(Token)

                    }
                })

            }

        })

    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    signIn,
    signUp,
    
}