let express = require('express');
let router = express.Router();

/* GET users listing. */
router.get('/:id', (req, res) => {
    console.log(req.params.id);
});

module.exports = router;
