const router = require("express").Router();
const Clients = require("../models/client");
const Cargos = require("../models/cargo");
const Country = require("../models/country");
const PowerOfAttroney_nra = require("../models/powerOfAttroney_nraModel");
const BookingConfirmation = require("../models/bookingc");
const Consignee = require("../models/consignee");
const Dock_R = require("../models/dock_Model");
const async = require('async');
const moment = require('moment');





//ECTN FORM

//show route
router.get("/ectn", function(req, res) {

    if (req.user) {
        async.parallel([

            function(callback) {
                Clients.find({}, function(err, foundData) {
                    callback(err, foundData);
                });
            },
            function(callback) {
                Dock_R
                    .find({})
                    .populate("Client")
                    .sort('-_id')
                    .exec(function(err, foundAllData) {
                        callback(err, foundAllData);
                    });
            }

        ], (err, results) => {
            var clientsData = results[0];
            var foundAllData = results[1];
            res.render("main/ectn", { title: 'Oldsailor Ocean Shipping LLC || Dock Receipt', clientsData: clientsData, foundAllData: foundAllData });

        });
    }
    else {

    }

});


module.exports = router
