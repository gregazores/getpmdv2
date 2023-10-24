const express = require('express');

const port = process.env.PORT || 8000;

const app = express();

const router = express.Router();

const bodyParser = require('body-parser');

router.get('/*', (req, res, next) => {
    res.redirect('https://pmdbeauty.com/')
});

app.use('/', router);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})