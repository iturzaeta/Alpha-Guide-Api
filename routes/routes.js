const express = require('express');
const router = express.Router();
const upload = require('../config/cloudinary.config')
const authMiddleware = require('../middlewares/auth.middleware')
const usersController = require('../controllers/usersController')
const tripsController = require('../controllers/trips.controller')
const countriesController = require('../controllers/countries.controller')


router.get('/') //Home


///////////////USER/////////////////

router.post('/users/:id/delete', authMiddleware.isAuthenticated, usersController.delete)
router.patch('/users/profile', authMiddleware.isAuthenticated, upload.single('image'), usersController.edit)
router.get('/users/:id', usersController.getOne)
router.get('/users/profile',authMiddleware.isAuthenticated, usersController.getOne)
router.post('/users', authMiddleware.isNotAuthenticated, upload.single('image'), usersController.create)
router.get('/users', usersController.getAll)

router.get('/users/:token/validate',authMiddleware.isNotAuthenticated, usersController.validate);

router.post('/login', authMiddleware.isNotAuthenticated, usersController.login)

router.post('/logout', authMiddleware.isAuthenticated, usersController.logout)


////////////////TRIPS/////////////////

router.post('/trips', authMiddleware.isAuthenticated, tripsController.create)
router.patch('/trips/:id', authMiddleware.isAuthenticated, tripsController.edit)


////////////////COUNTRIES/////////////

router.get('/countries/:id', countriesController.getOne)
router.get('/countries', countriesController.getAll)


module.exports = router;