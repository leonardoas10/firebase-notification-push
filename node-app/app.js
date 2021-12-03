const express = require('express');

const { sendNotification } = require('./firebase-init');

const app = express();
const router = express.Router();

router.get('/send', async (req, res, next) => {
    try {
        await sendNotification();
    } catch (error) {
        console.error('Error => ', error);
    }
});

app.use('/', router);

app.listen(8080);
