const express = require('express');
const router = express.Router();

const contactus = require('../models/contactus');

router.get('/', (req, res) =>{
    contactus.find((err, result) =>{
        if(err) throw err;
        else res.send(result);
    })
})

router.post('/',(req, res)=>{
    const { name, email, subject, message} = req.body;
    const contact = new contactus;

    contact.name = name;
    contact.email =  email;
    contact.subject = subject;
    contact.message = message;

    contact.save()
        .then(data=>res.json(data))
        .catch(err => res.status(500).json(err))
})

module.exports = router;