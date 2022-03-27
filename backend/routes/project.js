const express = require('express');
const { isAdmin } = require('../middlewares/adminAuth')
const { isAuth } = require('../middlewares/userAuth')
const { requireSignin } = require('../middlewares/express-jwt')
const { create, projectById, read, update, likes, dislikes, listBySearch, listRelated,
  listSearch, photo, lists, remove, listCategories} = require('../controllers/projectController');
const { userById } = require('../controllers/userController');


const router = express.Router()

 router.get('/project/:projectId', read)
 router.post('/project/create/:userId', requireSignin,isAuth, isAdmin, create);
 router.delete('/project/remove/:projectId/:userId', requireSignin,isAuth,isAdmin, remove);
 router.put(
  "/project/:projectId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);
 

router.get('/projects', lists)
router.get('/project/photo/:projectId', photo)
router.post("/projects/by/search", listBySearch);
router.get("/projects/categories", listCategories);
router.get("/projects/search", listSearch);
router.get("/projects/related/:projectId", listRelated);

router.param('projectId', projectById);
router.param('userId', userById);



module.exports = router