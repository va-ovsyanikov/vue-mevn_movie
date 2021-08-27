const { Schema, model } = require('mongoose')
const moment = require('moment')
moment.locale('ru');
const Post = new Schema({
    title: String,
    category: String,
    description: String,
    image: String,
    preview: String,
    released: Number,
    created: {
        type: String,
        default: moment().format('DD MMMM YYYY')
    }


})

module.exports = model("Post", Post)