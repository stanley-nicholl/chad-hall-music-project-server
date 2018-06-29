const router = require('express').Router()
const { musicController, authController } = require('../controllers')

router.get('./', authController.authorizedUser, musicController.index)

router.post('./', musicController.create)

router.delete('/:id', authController.isAdmin, userController.destroy)

module.exports = router