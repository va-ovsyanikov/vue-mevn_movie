const Post = require('../model/Post')
const genericCrud = require('./generic.controllers')


module.exports = {
    ...genericCrud(Post)
}


