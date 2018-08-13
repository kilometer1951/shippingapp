const router = require("express").Router();
const Clients = require("../models/client");
const Cargos = require("../models/cargo");
const Country = require("../models/country");
const PowerOfAttroney_nra = require("../models/powerOfAttroney_nraModel");
const BookingConfirmation = require("../models/bookingc");
const async = require('async');
const moment = require('moment');

//search

router.post("/powerofattorney_searchdata/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({
        $or: [
            { portdestination: { $regex: new RegExp(req.body.data, "i") } },
            { carrier: { $regex: new RegExp(req.body.data, "i") } },
            { bill_of_lading_oring: { $regex: new RegExp(req.body.data, "i") } },
            { bill_of_lading_destination: { $regex: new RegExp(req.body.data, "i") } },
            { rate_basis: { $regex: new RegExp(req.body.data, "i") } },
            { cargo_qantity: { $regex: new RegExp(req.body.data, "i") } },
            { origin_service: { $regex: new RegExp(req.body.data, "i") } },
            { destination_service: { $regex: new RegExp(req.body.data, "i") } },
            { special_conditions: { $regex: new RegExp(req.body.data, "i") } },
            { commodity: { $regex: new RegExp(req.body.data, "i") } },
            { carrier_rep: { $regex: new RegExp(req.body.data, "i") } }


        ],

    }, { portdestination: 1, carrier: 1, bill_of_lading_oring: 1, bill_of_lading_destination: 1, rate_basis: 1, cargo_qantity: 1, origin_service: 1, destination_service: 1, special_conditions: 1, commodity: 1, carrier_rep: 1 }).sort('-createdAt').exec(function(err, foundData) {

        return res.send(foundData);
    });
})

// router.post("/powerofattorney_searchdata2/searchQ", function(req, res) {

//     PowerOfAttroney_nra.find({
//         $or: [
//             { carrier: { $regex: new RegExp(req.body.data, "i") } },

//         ],

//     }, { carrier: 1 }).sort('-createdAt').exec(function(err, foundData) {

//         return res.send(foundData);
//     });
// })



router.post("/_searchdata/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { portdestination: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})



router.post("/_searchdata2/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { carrier: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata3/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { bill_of_lading_oring: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})


router.post("/_searchdata4/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { bill_of_lading_destination: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})



router.post("/_searchdata5/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { rate_basis: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})


///
router.post("/_searchdata6/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { cargo_qantity: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata7/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { origin_service: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata8/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { destination_service: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata9/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { special_conditions: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata10/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { commodity: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})

router.post("/_searchdata11/searchQ", function(req, res) {

    PowerOfAttroney_nra.find({

    }, { carrier_rep: 1 }).sort('-createdAt').limit(10).exec(function(err, foundData) {

        return res.send(foundData);
    });
})


//powerOfAttroney_nra
router.get('/powerOfAttroney_nra', function(req, res) {
    if (req.user) {
        var perPage = 4;
        var pageQuery = parseInt(req.query.page);
        var pageNumber = pageQuery ? pageQuery : 1;
        //get clients

        async.parallel([

            function(callback) {
                Clients.find({}, function(err, foundData) {
                    callback(err, foundData);
                });
            },
            function(callback) {
                PowerOfAttroney_nra
                    .find({})
                    .populate("Client")
                    .sort('-createdAt')
                    .skip((perPage * pageNumber) - perPage)
                    .limit(perPage)
                    .exec(function(err, foundAllData) {
                        callback(err, foundAllData);
                    });
            }

        ], (err, results) => {
            var clientsData = results[0];
            var foundAllData = results[1];
            PowerOfAttroney_nra.count().exec(function(err, count) {
                if (err) {
                    console.log(err)
                }
                else {
                    return res.render("main/powerOfAttroney_nra", {
                        title: 'Oldsailor Ocean Shipping LLC || POA',
                        clientsData: clientsData,
                        foundAllData: foundAllData,
                        current: pageNumber,
                        pages: Math.ceil(count / perPage)
                    });

                }
            })
        });

    }
    else {
        return res.redirect('/login');
    }
});



//Fetch Cargo per client by id during POA / NRA from creation
router.get("/cargo/:client_id/fetchCargo_perclient_2", function(req, res) {

    //get that clients cargos
    Cargos
        .find({ Client: req.params.client_id })
        .populate("Client")
        .sort('-createdAt')
        .exec(function(err, foundAllData) {
            return res.send(foundAllData)
        });


});

//new
router.post("/poa_nra_form/new", function(req, res) {
    //check if cargo exist 
    var cargo = '';
    var cosignee = '';
    var attachment_status = Boolean;
    if (req.body.cargo_id_ !== "") {
        cargo = req.body.cargo_id_;
        attachment_status = true;

    }
    else {
        cargo = undefined;
        attachment_status = false;
    }


    if (req.body.consigneedropdown !== "Select a Consignee") {
        cosignee = req.body.consigneedropdown;

    }
    else {
        cosignee = undefined;
    }


    var newData = new PowerOfAttroney_nra();

    newData.createdAt = moment.parseZone(new Date()).format('l'),
        newData.Client = req.body.clientdropdown,
        newData.Consignee = cosignee,
        newData.Cargo = cargo,
        newData.attachment_status = attachment_status,
        newData.insurance = req.body.insurance,
        newData.portdestination = req.body.portdestination,
        newData.carrier = req.body.carrier,
        newData.carrier = req.body.carrier,
        newData.typeofshipment = req.body.typeofshipment,
        newData.typeofpayment = req.body.typeofpayment,
        newData.effective_date = req.body.effective_date,
        newData.expiration = req.body.expiration,
        newData.carrier_rep = req.body.carrier_rep,
        newData.bill_of_lading_oring = req.body.bill_of_lading_oring,
        newData.ocean_port_of_loading = req.body.ocean_port_of_loading,
        newData.bill_of_lading_destination = req.body.bill_of_lading_destination,
        newData.port_of_discharge = req.body.port_of_discharge,
        newData.rate = req.body.rate,
        newData.rate_basis = req.body.rate_basis,
        newData.cargo_qantity = req.body.cargo_qantity,
        newData.minimum = req.body.minimum,
        newData.maximum = req.body.maximum,
        newData.origin_service = req.body.origin_service,
        newData.destination_service = req.body.destination_service,
        newData.special_conditions = req.body.special_conditions,
        newData.commodity = req.body.commodity,


        //add
        newData.save(function(err, newlyCreated) {
            // console.log(newlyCreated);
            res.redirect("/powerOfAttroney_nra");
            //return res.send(newlyCreated);
        });

});


//delete 
router.delete("/poa_nra/:id/delete", function(req, res) {
    PowerOfAttroney_nra.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            return console.log(err);
        else
            return res.send(req.params.id);
    })

});


//email
router.get("/poa_nra/:id/email/:client_id", function(req, res) {

    async.parallel([
        function(callback) {
            PowerOfAttroney_nra
                .find({ _id: req.params.id })
                .populate("Client")
                .exec(function(err, foundAllData) {
                    //    console.log(foundAllData[0].Client[0].full_name)
                    callback(err, foundAllData)
                });
        },

        //get all his booking confirmations
        function(callback) {
            BookingConfirmation
                .find({ Client: req.params.client_id })
                .sort('-createdAt')
                .exec(function(err, foundAllData) {
                    callback(err, foundAllData);
                });
        }


    ], (err, results) => {
        var foundAllData = results[0];
        var foundAllData_1 = results[1];
        res.render("main/poa_nra_email", { layout: false, foundAllData: foundAllData, foundAllData_1: foundAllData_1 });

    });


});

//email
router.get("/poa_nra/:id/email_1/:client_id", function(req, res) {

    async.parallel([
        function(callback) {
            PowerOfAttroney_nra
                .findOne({ _id: req.params.id })
                .populate("Cargo")
                .populate("Consignee")
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
        }

    ], (err, results) => {
        var foundAllData = results[0];
        var ClientData = results[1];

        // console.log();
        var ConsigneeCountryname = "";
        //get consignee country name
        //  console.log(foundAllData.Consignee[0].Country !== undefined)
        if (foundAllData.Consignee.length !== 0) {
            Country.findOne({ _id: foundAllData.Consignee[0].Country }, function(err, countrydata) {

                if (countrydata !== null) {
                    ConsigneeCountryname = countrydata.countryname
                }


                //check for data
                // console.log(foundAllData.Cargo.length);

                res.render("main/poa_nra_email_1", { layout: false, foundAllData: foundAllData, ClientData: ClientData, ConsigneeCountryname: ConsigneeCountryname });
            });
        }
        else {
            res.render("main/poa_nra_email_1", { layout: false, foundAllData: foundAllData, ClientData: ClientData, ConsigneeCountryname: ConsigneeCountryname });
        }





        //console.log(countryname);



    });



});



//Fetch poa_nra per client
router.get("/poa_nra/:id/fetchCargo_perclient", function(req, res) {

    PowerOfAttroney_nra
        .find({ Client: req.params.id })
        .sort('-createdAt')
        .populate("Client")
        .exec(function(err, foundData) {
            return res.send(foundData)
        });


});

//attach a container Route
router.get("/poa_nra/:poa_nra_ID_id/attach/:client_id", function(req, res) {

    if (req.user) {


        async.parallel([

            //display clients cargo
            function(callback) {
                Cargos.find({ Client: req.params.client_id })
                    .populate('Client')
                    .sort('-createdAt')
                    .exec(function(err, foundData) {
                        callback(err, foundData);
                    });
            },


            function(callback) {
                PowerOfAttroney_nra
                    .find({ _id: req.params.poa_nra_ID_id })
                    .populate("Client")
                    .exec(function(err, foundAllData) {
                        callback(err, foundAllData);
                    });
            }

        ], (err, results) => {
            var CargoData = results[0];
            var foundData = results[1];
            console.log(foundData)
            return res.render("main/attach_container", { title: 'Oldsailor Ocean Shipping LLC || Attach Container', CargoData: CargoData, foundData: foundData, layout: false });
        });

    }
    else {
        return res.redirect('/login');
    }


});

//attach car
router.post("/attachCargo/:cargo_id_/to/:poa_nra_id", function(req, res) {

    //find poa_nra and attch container id to it
    PowerOfAttroney_nra.findByIdAndUpdate(req.params.poa_nra_id, { Cargo: req.params.cargo_id_, attachment_status: true }, function(err, upatedData) {
        console.log(upatedData);
        res.redirect("/powerOfAttroney_nra");
    });
});


//edit route
router.get("/poa_nra/:poa_nra_ID_id/edit", function(req, res) {

    if (req.user) {

        PowerOfAttroney_nra
            .findOne({ _id: req.params.poa_nra_ID_id })
            .populate("Client")
            .exec(function(err, foundData) {
                console.log(foundData);
                return res.render("main/edit_poa_nra", { title: 'Oldsailor Ocean Shipping LLC || Edit POA / NRA', foundData: foundData, layout: false });

            });

    }
    else {
        return res.redirect('/login');
    }


});


//edit form data
router.post("/poa_nra/:id/editFormData", function(req, res) {
    //check if cargo exist 



    var editData = {

        insurance: req.body.insurance,
        portdestination: req.body.portdestination,
        carrier: req.body.carrier,
        carrier: req.body.carrier,
        typeofshipment: req.body.typeofshipment,
        typeofpayment: req.body.typeofpayment,
        effective_date: req.body.effective_date,
        expiration: req.body.expiration,
        carrier_rep: req.body.carrier_rep,
        bill_of_lading_oring: req.body.bill_of_lading_oring,
        ocean_port_of_loading: req.body.ocean_port_of_loading,
        bill_of_lading_destination: req.body.bill_of_lading_destination,
        port_of_discharge: req.body.port_of_discharge,
        rate: req.body.rate,
        rate_basis: req.body.rate_basis,
        cargo_qantity: req.body.cargo_qantity,
        minimum: req.body.minimum,
        maximum: req.body.maximum,
        origin_service: req.body.origin_service,
        destination_service: req.body.destination_service,
        special_conditions: req.body.special_conditions,
        commodity: req.body.commodity,

    };

    PowerOfAttroney_nra.findByIdAndUpdate(req.params.id, editData, function(err, upatedData) {
        console.log(upatedData);
        res.redirect("/powerOfAttroney_nra");
    });

});



//auto fill form

router.get('/autofill', function(req, res) {
    if (req.user) {
        var t = req.cookies;
        // t.req.cookies['connect.sid'].split('.')[1]
        //   console.log(t['connect.sid'])
        //get clients
        Clients.find({})
            .sort('-createdAt')
            .exec(function(err, foundData) {
                return res.render("main/autofill", { data: foundData, layout: false });
            });
    }
    else {
        return res.redirect('/login');
    }
});


router.get('/poa_autofill/:id', function(req, res) {
    if (req.user) {
        async.parallel([

            function(callback) {
                Clients.findOne({ _id: req.params.id }, function(err, foundData) {
                    callback(err, foundData);
                });
            },
            function(callback) {
                PowerOfAttroney_nra
                    .find({ Client: req.params.id })
                    .populate("Client")
                    .sort('-createdAt')
                    .exec(function(err, foundAllData) {
                        callback(err, foundAllData);
                    });
            }

        ], (err, results) => {
            var clientName = results[0];
            var foundAllData = results[1];
            return res.render("main/poa_autofill", { clientName: clientName, foundAllData: foundAllData, layout: false });
        });
    }
    else {
        return res.redirect('/login');
    }
});



router.get("/autofill_new/:id", function(req, res) {

    if (req.user) {

        PowerOfAttroney_nra
            .findOne({ _id: req.params.id })
            .populate("Client")
            .exec(function(err, foundData) {
                console.log(foundData);
                return res.render("main/autofill_new", { title: 'Oldsailor Ocean Shipping LLC || New POA / NRA', foundData: foundData, layout: false });

            });

    }
    else {
        return res.redirect('/login');
    }


});

router.post("/autofill_new/:id/new", function(req, res) {
    //check if cargo exist 





    var newData = new PowerOfAttroney_nra();

    newData.createdAt = moment.parseZone(new Date()).format('l'),
        newData.Client = req.body.clientname,
        newData.Consignee = req.body.cosigneename,
        newData.attachment_status = false,
        newData.insurance = req.body.insurance,
        newData.portdestination = req.body.portdestination,
        newData.carrier = req.body.carrier,
        newData.carrier = req.body.carrier,
        newData.typeofshipment = req.body.typeofshipment,
        newData.typeofpayment = req.body.typeofpayment,
        newData.effective_date = req.body.effective_date,
        newData.expiration = req.body.expiration,
        newData.carrier_rep = req.body.carrier_rep,
        newData.bill_of_lading_oring = req.body.bill_of_lading_oring,
        newData.ocean_port_of_loading = req.body.ocean_port_of_loading,
        newData.bill_of_lading_destination = req.body.bill_of_lading_destination,
        newData.port_of_discharge = req.body.port_of_discharge,
        newData.rate = req.body.rate,
        newData.rate_basis = req.body.rate_basis,
        newData.cargo_qantity = req.body.cargo_qantity,
        newData.minimum = req.body.minimum,
        newData.maximum = req.body.maximum,
        newData.origin_service = req.body.origin_service,
        newData.destination_service = req.body.destination_service,
        newData.special_conditions = req.body.special_conditions,
        newData.commodity = req.body.commodity,


        //add
        newData.save(function(err, newlyCreated) {
            console.log(newlyCreated);
            res.redirect("/powerOfAttroney_nra")
        });

});
module.exports = router
