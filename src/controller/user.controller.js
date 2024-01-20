const service = require('../service/user.service')

const create = (req, res) => {
    const user = req.body
    service.create(user)
    res.status(200).send('User create successfully')
}

module.exports = {
    create
}