const { user_account } = require('../model/index')

const create = async data => {
    await user_account.create(data)
}

module.exports = {
    create
}