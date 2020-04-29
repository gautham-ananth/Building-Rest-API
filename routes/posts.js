const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Response from the server will be displayed in the browser");
})
router.get('/specific', (req, res) => {
    res.send("Specific posts");
})


module.exports = router;