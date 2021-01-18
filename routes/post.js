
const Post = require('../models/post.model.js');
var express = require('express');
var router = express.Router()

router.post('/', async (req, res) => {
  
   

    const post = new Post({
        title: req.body.title , 
        img: req.body.img , 
        short_title: req.body.short_title , 
        desc: req.body.desc , 
        short_desc: req.body.short_desc , 
        season: req.body.season , 
        new: req.body.new , 
    });
  await  post.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error creating."
        });
    });
});


router.get('/', async (req, res) => {
    await  Post.find()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});


router.get('/:Id', async (req, res) => {
    await  Post.findById(req.params.Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });            
        }
        res.send(data);
    })
});



router.put('/:Id', async (req, res) => {
   
    if(!req.body.content) {
        return res.status(400).send({
            message: "content can't be empty"
        });
    }

    await  Post.findByIdAndUpdate(req.params.Id, {
        title: req.body.title , 
        img: req.body.img , 
        short_title: req.body.short_title , 
        desc: req.body.desc , 
        short_desc: req.body.short_desc , 
        season: req.body.season , 
        new: req.body.new , 
    }, {new: true})
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });
        }
        res.send(data);
    })
});


router.delete('/:Id', async (req, res) => {
    await Post.findByIdAndRemove(req.params.Id)
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.Id
            });
        }
        res.send({message: "Note deleted successfully!"});
    })
});


module.exports = router;