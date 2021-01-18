const Season = require('../models/season.model.js');
var express = require('express');
var router = express.Router()



router.post('/', async (req, res) => {
  


    const season = new Season({
        name: req.body.name, 
        img: req.body.img, 
        desc: req.body.desc, 
       
    });
    await season.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error creating."
        });
    });
});


router.get('/', async (req, res) => {
    await  Season.find().populate('product', 'name -_id')
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "error retrieving."
        });
    });
});


router.get('/:Id', async (req, res) => {
    await Season.findById(req.params.Id)
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

    await  Season.findByIdAndUpdate(req.params.Id, {
        name: req.body.name, 
        img: req.body.img, 
        desc: req.body.desc, 
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
    await  Season.findByIdAndRemove(req.params.Id)
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