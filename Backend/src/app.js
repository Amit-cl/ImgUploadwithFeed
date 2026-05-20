const express = require('express');
const multer = require('multer');
const uploadFile = require("./services/storage.service");
const postModel= require ("./model/post.model")
const cors=require('cors')
const app = express();
// require("dotenv").config();
const upload = multer({ storage: multer.memoryStorage() });


app.use(cors());

app.post('/create-post', upload.single('image'), async (req, res) => {
    console.log(req.file);

    const result = await uploadFile(req.file);
    // console.log(result);
    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption,
    })


    res.status(201).json({
        message: " post created",
        post
    });
});


app.get('/get-post',  async (req, res) => {
const post = await postModel.find()


return res.status(200).json({
    message:"post fetched succesfully",
    post:post
})
}
)
module.exports = app;