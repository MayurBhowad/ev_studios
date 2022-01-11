const express = require('express');
const validateUserLogin = require('../validators/login.validator');

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json())

app.post('/login', (req, res) => {
    //Sending request to validation
    const { errors, isValid } = validateUserLogin(req.body);

    //invalid form
    if (!isValid) {
        return res.status(400).json({ success: false, errors: errors })
    }

    //valid form
    return res.json({ success: true, message: 'user login successfull' })
})

app.listen(PORT, () => console.log('api is up and rolling...'))