const log = console.log
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'yosup')
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token})
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send('error auth')

    }
    
    
    // log('auth middleware')
    // next()
}

module.exports = auth