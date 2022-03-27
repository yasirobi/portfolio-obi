const express = require('express')
const { isAdmin } = require('../middlewares/adminAuth')
const { isAuth } = require('../middlewares/userAuth')
const { requireSignin } = require('../middlewares/express-jwt')
const { create, read, categoryById, update, remove, lists } = require('../controllers/categoryController')
const { userById } = require('../controllers/userController')

const router = express.Router()


router.post('/category/create/:userId',requireSignin,isAuth, isAdmin, create)
router.get('/category/:categoryId', read)
router.put('/category/:categoryId/:userId', requireSignin,isAuth, isAdmin, update);
router.delete('/category/:categoryId/:userId', requireSignin,isAuth, isAdmin, remove);
router.get('/categories', lists)


router.param('categoryId', categoryById);
router.param('userId', userById);


module.exports = router