const router = require("express").Router();
const Clients = require("../models/client");
const Expense = require("../models/Expense");
const async = require('async');
const moment = require('moment');






router.get('/expense', function(req, res) {
    if (req.user) {
        var t = req.cookies;
        var perPage = 7;
        var pageQuery = parseInt(req.query.page);
        var pageNumber = pageQuery ? pageQuery : 1;
        // t.req.cookies['connect.sid'].split('.')[1]
        //   console.log(t['connect.sid'])
        //get clients
        Expense.find({})
            .sort('-createdAt')
            .skip((perPage * pageNumber) - perPage)
            .limit(perPage)
            .exec(function(err, foundData) {
                Expense.count().exec(function(err, count) {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        return res.render("main/expense", {
                            title: 'Oldsailor Ocean Shipping LLC || Expense',
                            data: foundData,
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


//get modal data before editing
router.get("/openEditModal_expense/:id", function(req, res) {

    Expense.findOne({ _id: req.params.id }, function(err, foundData) {
        return res.send({
            foundData: foundData
        });
    })


});







router.post("/expense/new", (req, res) => {


    var expense = req.body.data.expense;
    var amount = req.body.data.amount;

    var newData = {
        expense: expense,
        amount: amount

    };
    //console.log(req.body.data.cfirst_name)
    Expense.create(newData, function(err, newlyCreated) {
        return res.send(newlyCreated);
    });
});





//edit expense post route
router.put("/expense/:expense_id/edit", function(req, res) {
    Expense.update({
            _id: req.params.expense_id,
        },

        {
            $set: {
                "expense": req.body.data.expense,
                "amount": req.body.data.amount,
            },


        }, {
            "multi": true

        },
        function(err, updated) {
            // console.log(updated)
            return res.send(updated)
        });
});


//delete expense
router.delete("/expense/:id/delete", function(req, res) {
    Expense.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            return console.log(err);
        else
            return res.send(req.params.id);
    })

});





module.exports = router
