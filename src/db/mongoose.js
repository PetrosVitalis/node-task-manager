const log = console.log
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')
    .then(() => log('Connected to MongoDB'))
    .catch((error) => log('Connection error:', error));