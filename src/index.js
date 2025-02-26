const express = require('express')
const log = console.log
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     // log(req.method, req.path)
//     // next() // do something => run route handler
//     if (req.method === 'GET') {
//         res.send('GET req disabled')
//     } else{
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('under maintenance')
//     // next()
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    log('Server up on port ' + port)
})

const jwt = require('jsonwebtoken')

const myfunc = async () => {
    const token = jwt.sign({ _id: 'abd324' }, 'g34qgvr3y3e', { expiresIn: '7 days' })
    log(token)

    const data = jwt.verify(token, 'g34qgvr3y3e')
    log(data)
}

myfunc()