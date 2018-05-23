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



//show route
router.get("/invoice", function(req, res) {

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
                    .sort('-createdAt')
                    .exec(function(err, foundAllData) {
                        callback(err, foundAllData);
                    });
            }

        ], (err, results) => {
            var clientsData = results[0];
            var foundAllData = results[1];
            res.render("main/invoice", { title: 'Oldsailor Ocean Shipping LLC || Dock Receipt', clientsData: clientsData, foundAllData: foundAllData });

        });
    }
    else {

    }

});







//edit form data
router.post("/invoice/new/:id", function(req, res) {
    //check if cargo exist 


    var ocean_freight = req.body.ocean_freight;
    var truck = req.body.truck;
    var ectn_becs = req.body.ectn_becs;
    var extra_charges = req.body.extra_charges;
    var invoice_total = req.body.invoice_total;
    var balance_due = req.body.balance_due;
    var more_invoice_fields = req.body.more_invoice_fields;

    var editData = {
        ocean_freight: ocean_freight,
        truck: truck,
        ectn_becs: ectn_becs,
        extra_charges: extra_charges,
        invoice_total: invoice_total,
        balance_due: balance_due,
        more_invoice_fields: more_invoice_fields,
        more_invoice_fields_2: req.body.more_invoice_fields_2,
        more_invoice_fields_3: req.body.more_invoice_fields_3,

        label_charge1: req.body.label_charge1,
        label_charge2: req.body.label_charge2,
        label_charge3: req.body.label_charge3,
        label_charge4: req.body.label_charge4,




        invoice_exist: true,
        invoice_date: moment.parseZone(new Date()).format('l')


    };

    Dock_R.findByIdAndUpdate(req.params.id, editData, function(err, upatedData) {
        //   console.log(upatedData);
        res.redirect("/invoice");
    });

});


router.get("/invoice/:id/editRoute", function(req, res) {

    if (req.user) {

        Dock_R
            .findOne({ _id: req.params.id })
            .populate("Client")
            .exec(function(err, foundData) {
                //  console.log(foundData);
                return res.render("main/edit_invoice", { title: 'Oldsailor Ocean Shipping LLC || Edit Invoice', foundData: foundData, layout: false });
            });


    }
    else {
        return res.redirect('/login');
    }


});



router.post("/invoice/:id/edit", function(req, res) {
    //check if cargo exist 


    var ocean_freight = req.body.ocean_freight;
    var truck = req.body.truck;
    var ectn_becs = req.body.ectn_becs;
    var extra_charges = req.body.extra_charges;
    var invoice_total = req.body.invoice_total;
    var balance_due = req.body.balance_due;
    var more_invoice_fields = req.body.more_invoice_fields;



    var editData = {
        ocean_freight: ocean_freight,
        truck: truck,
        ectn_becs: ectn_becs,
        extra_charges: extra_charges,
        invoice_total: invoice_total,
        balance_due: balance_due,
        more_invoice_fields: more_invoice_fields,
        more_invoice_fields_2: req.body.more_invoice_fields_2,
        more_invoice_fields_3: req.body.more_invoice_fields_3,

        label_charge1: req.body.label_charge1,
        label_charge2: req.body.label_charge2,
        label_charge3: req.body.label_charge3,
        label_charge4: req.body.label_charge4,


    };

    Dock_R.findByIdAndUpdate(req.params.id, editData, function(err, upatedData) {
        //   console.log(upatedData);
        res.redirect("/invoice");
    });

});


//email invoice


//email bill of lading
router.get("/invoice/:id/email/:client_id/cargo/:cargo_id/consignee/:consignee_id/booking_c/:bc_id", function(req, res) {

    async.parallel([
        function(callback) {
            Dock_R
                .findOne({ _id: req.params.id })
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData)
                });
        },

        function(callback) {
            Clients
                .findOne({ _id: req.params.client_id })
                .populate("City")
                .populate("State")
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData)
                });
        },
        function(callback) {
            BookingConfirmation
                .findOne({ _id: req.params.bc_id })
                .sort('-createdAt')
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData);
                });
        },
        function(callback) {
            Cargos
                .findOne({ _id: req.params.cargo_id })
                .sort('-createdAt')
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData);
                });
        },
        function(callback) {
            Consignee
                .findOne({ _id: req.params.consignee_id })
                .populate("Country")
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData)
                });
        }


    ], (err, results) => {
        var Dock_R = results[0];
        var ClientData = results[1];
        var BookingConfirmation = results[2];
        var Cargos = results[3];
        var Consignee = results[4];
        //    console.log(BookingConfirmation)
        res.render("main/email_invoice", { layout: false, Dock_R: Dock_R, ClientData: ClientData, BookingConfirmation: BookingConfirmation, Cargos: Cargos, Consignee: Consignee });



    });



});


module.exports = router
