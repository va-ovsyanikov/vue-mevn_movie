const router = require('express').Router()
const multer = require("multer");
const { post } = require('../controllers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true)
    } else {
        cb(null, false)
    }
}

const upload = multer(
    {
        storage,
        fileFilter
    }
).single("image")


router.get('/', post.getAll)
router.get('/post/:id', post.getOne)
router.patch('/edit/:id', upload, post.update)
router.post('/add-post', upload, post.create)
router.delete('/post/:_id', post.delete)


module.exports = router
