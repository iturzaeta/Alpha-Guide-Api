const express = require('express');
const router = express.Router();
const upload = require('../config/cloudinary.config')
const usersController = require('../controllers/usersController') 


router.get('/') //Home


///////////////USER/////////////////

router.post('/users/:id/delete', usersController.delete)
router.post('/users/:id', usersController.edit)
router.get('/users/:id', usersController.getOne)
router.post('/users', upload.single('image'), usersController.create)
router.get('/users', usersController.getAll)

router.get('/users/:token/validate',usersController.validate);

router.post('/login', usersController.login)
router.post('/logout', usersController.logout)


////////////////TRIPS/////////////////



module.exports = router;