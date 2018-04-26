const router = require("express").Router();
const Clients = require("../models/client");
const Cargos = require("../models/cargo");
const async = require('async');
const moment = require('moment');






//CONSIGNEE
router.get('/admin/index', function(req, res) {
    if (req.user) {
        //get clients

        return res.render("admin/index", { title: 'Oldsailor Ocean Shipping LLC || ADMIN', layout: 'admin_layout' });

    }
    else {
        return res.redirect('/login');
    }
});




module.exports = router
