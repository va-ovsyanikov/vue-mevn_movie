// require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
// const morgan = require('morgan')
const path = require("path")
const routesPost = require('./routes/post')



app.use(cors())
app.use(express.static(path.join(__dirname, '/uploads'))); 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routesPost)
// app.use(morgan(process.env.LOG_LEVEL))




const {MONGO_DB_URL, PORT} = process.env

// mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}`, {



mongoose.connect(MONGO_DB_URL, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false, 
}, (error) => {
    if (!error) {
        console.log("DB connect")
        app.listen(PORT, (error) => {
            if (!error) {
                console.log("SERVER  connect"  )
            } else {
                console.log(error)
            }

        })
    } else {
        console.log(error)
    }


})





