const router = require('express').Router();

const userRoutes = require('./userRoutes');
const commentRoutes= require('./commentRoutes');
const blogpostRoutes= require('./blogpostRoutes');

router.use('/users', userRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/comment', commentRoutes);

module.exports = router;
