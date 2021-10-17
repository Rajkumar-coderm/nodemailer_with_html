const transpoter = require('./connection/nodemailer.connection')
const express = require('express');
const app = express()
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser');
const multer = require('multer');
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.use(bodyParser.json())
app.use(express.static('/home/rajkumar/Desktop/React_project/msg_sender/views'))


const storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})


app.get('/', (req, res) => {
    res.render('/home/rajkumar/Desktop/React_project/msg_sender/views/index.ejs')
})

app.post('/gmailSend', upload.single('image'), (req, res, next) => {
    try {
        const path1 = req.file.path
        const mailOPtion = {
            from: process.env.user,
            to: req.body.to,
            subject: req.body.subject,
            text: req.body.text,
            attachments: [
                {
                    path: path1
                }
            ]
        }
        transpoter.sendMail(mailOPtion, function (err, info) {
            if (err) {
                res.send(err)
            } else {
                res.render('/home/rajkumar/Desktop/React_project/msg_sender/views/home.ejs')
                fs.unlinkSync(path1)
            }
        })
    } catch (error) {
        console.log(error);
    }
});




app.listen(2000, () => {
    console.log("server start at 2000");
})