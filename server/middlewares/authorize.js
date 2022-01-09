const { verify } = require('jsonwebtoken')
module.exports = (req, res, next) => {

    const Token = req.header("Token")
    if (!Token) {
        res.json({ error: 'user not logged in' })
    }

    try {

        const { user } = verify("Token", process.env.ACCESS_TOKEN_SECRET)
        req.user = user
        if (!user) {
            res.json({ error: "invalid token" })
        }
        else {
            return next()
        }

    } catch (error) {
        console.log(error)
    }
}