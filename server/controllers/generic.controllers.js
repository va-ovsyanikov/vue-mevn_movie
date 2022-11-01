const fs = require('fs')
module.exports = (model) => {
    return {
        async getAll(_, res) {
            try {
                const data = await model.find()
                res.status(200).send(data)
            } catch (error) {
                res.status(400).send(error)
            }
        },
        async getOne({ params: { id } }, res) {
            try {
                const data = await model.findById(id)
                res.status(200).send(data)
            } catch (error) {
                res.status(400).send(error)
            }
        },

        async create(req, res) {
            try {
                const postNew = req.body
                postNew.image = req.file.filename
                console.log( postNew.image)
           await new model(postNew).save()
                res.status(200).send({message:"Post added!"})
            } catch (error) {
                res.status(400).send(error)
            }
        },

        async delete({ params: { _id } }, res) {
            try {
                console.log(_id); 
                const data = await model.findByIdAndDelete(_id)
                if (data.image != "") {
                    try {
                        fs.unlinkSync('./uploads/' + data.image)
                    } catch (error) {
                        console.log(error)
                    }
                }
                res.status(200).send({
                    data,
                    message:"Delete post!"
                })
            } catch (error) {
                res.status(400).send(error)
            }
        },


        async update(req, res) {
            let newImg = ""
            if (req.file) {
                newImg = req.file.filename
                try {
                    fs.unlinkSync('./uploads/' + req.body.oldImage)
                } catch (error) {
                    console.log(error)
                }
            } else {
                newImg = req.body.oldImage
            }
            const updatePost = req.body
            updatePost.image = newImg
            try {
                const id = req.params.id
               const data = await model.findByIdAndUpdate(id,updatePost,{new: true})
                res.status(200).send({
                    data,
                    message:"Post update!"
                })
            } catch (error) {
                res.status(400).send(error)
            }
        },


    }
}