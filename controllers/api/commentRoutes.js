const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        return res.json(commentData);
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
    });

router.put('/:id', async (req, res) => {
    try{
        const commentData= await Comment.update(
            req.body,
            {
              where: {
                id: req.params.id,
              },
            }
        
        )
        return res.json(commentData);
    }catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try{
        const commentData = await Comment.destroy({
            where: {
            id: req.params.id,
        },
    });
        return res.json(commentData);
    }catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
  });
  
  module.exports = router;