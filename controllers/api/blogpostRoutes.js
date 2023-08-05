const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const blogData = await BlogPost.create(req.body);
    return res.json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log("PUT route");
    const blogData = await BlogPost.update(
      req.body,
      {
        where: {
          id: req.params.id,
        },
      }

    )
    return res.json(blogData)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const blogData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json(blogData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;