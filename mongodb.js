// const log = console.log

// const { MongoClient, ObjectID } = require('mongodb')

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const dbName = 'task-manager'

// const id = new ObjectID()
// log(id)
// log(id.getTimestamp())

// MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
//     if (error) {
//         return log('Cant connect to db')
//     }

//     const db = client.db(dbName)
    
//     db.collection('users').deleteMany({
//         age: 21
//     }).then((result) => {
//         log(result)
//     }).catch((error) => {
//         log(error)
//     })
// })
