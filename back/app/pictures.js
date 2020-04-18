const express = require('express');
const ValidationError = require('mongoose').Error.ValidationError;

const auth = require('../middleware/auth');
const upload = require('../multer').uploads;

const Picture = require('../models/Picture');

const router = express.Router();

router.get('/', async (req, res) => {
    let dbQuery = {};

    if (req.query.user) {
        dbQuery.user = req.query.user;
    }

    const items = await Picture.find(dbQuery).populate('user', `username`);
    res.send(items);
});


router.get('/:id', async (req, res) => {
    try {
        const item = await Picture.findById(req.params.id).populate('user', `username`);

        if (!item) {
            return res.status(404).send({message: 'Not found'});
        }

        res.send(item);
    } catch (e) {
        res.status(404).send({message: 'Not found'});
    }
});

router.post('/', [auth, upload.single('image')], async (req, res) => {
    try {
        const productData = {
            user: req.user,
            title: req.body.title
        };

        if (req.file) {
            productData.image = req.file.filename;
        }

        const picture = new Picture(productData);

        await picture.save();

        return res.send({id: picture._id});
    } catch (e) {
        if (e instanceof ValidationError) {
            return res.status(400).send(e);
        } else {
            return res.sendStatus(500);
        }
    }
});

router.delete('/:id', auth, async (req, res) => {
    try{
        const user = req.user;
        const picture = await Picture.findById(req.params.id);
        if(JSON.stringify(picture.user) === JSON.stringify(user._id)){
            const delRes = await Picture.deleteOne({_id: req.params.id});
            if (delRes) {
                return res.send({message: 'Deleted successfully'});
            } else{
                return res.status(400).send({error: "Could't delete your picture"});
            }
        } else{
            return res.status(403).send({error: "Unauthorized user"});
        }

    } catch(e){
        res.status(400).send(e);
    }
});

module.exports = router;