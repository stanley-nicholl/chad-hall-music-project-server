const router = require('express').Router()
const { userController, authController } = require('../controllers')

router.get('./fromToken', userController.showOneFromToken)
router.get('./:id', userController.showOne)

router.post('/', authController.isAdmin, userController.create, userController.createAdmin)

router.put('/:id', authController.isAdmin, userController.update)

router.delete('/:id', authController.isAdmin, userController.destroy)

module.exports = router