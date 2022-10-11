const  express = require('express')
const router = express.Router()

module.exports = router

  router.get("/", function(req, res) {
    res.send('hello world')
})
  router.get('/:id', (req, res) => {
    res.send(req.params.id)
  })

// router.post('/', (req, res) => ({  }));

// router.patch('/', (req, res) => ({  }));