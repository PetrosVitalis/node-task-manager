require('../src/db/mongoose')
const User = require('../src/models/user')
const log = console.log

const updateAgeAndCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('676ec955d66b928b9f2c1c9c', 27).then((count) => {
    log(count)
}).catch((e) => {
    log(e)
})