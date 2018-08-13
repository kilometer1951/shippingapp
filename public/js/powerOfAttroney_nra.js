function opensearch() {
    $("#autocomplete_1").css("display", "block");
    $("#autocomplete_2").css("display", "none");
    $.post("/_searchdata/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_1").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_1").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name" id="' + result.portdestination + '">';
            html += '<span >' + result.portdestination + '</span>';
            html += '</div>';

            $("#data_1").append(html);
            console.log(result.portdestination)
        });


    });
}


function opensearch2() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "block");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata2/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_2").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_2").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name2" id="' + result.carrier + '">';
            html += '<span >' + result.carrier + '</span>';
            html += '</div>';

            $("#data_2").append(html);
            console.log(result.carrier)
        });






    });


}


function opensearch3() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_3").css("display", "block");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_11").css("display", "none");


    $.post("/_searchdata3/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_3").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_3").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name3" id="' + result.bill_of_lading_oring + '">';
            html += '<span >' + result.bill_of_lading_oring + '</span>';
            html += '</div>';

            $("#data_3").append(html);
            console.log(result.bill_of_lading_oring)
        });






    });


}

function opensearch4() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "block");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_11").css("display", "none");


    $.post("/_searchdata4/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_4").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_4").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name4" id="' + result.bill_of_lading_destination + '">';
            html += '<span >' + result.bill_of_lading_destination + '</span>';
            html += '</div>';

            $("#data_4").append(html);
            console.log(result.bill_of_lading_destination)
        });






    });


}


function opensearch5() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_5").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata5/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_5").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_5").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name5" id="' + result.rate_basis + '">';
            html += '<span >' + result.rate_basis + '</span>';
            html += '</div>';

            $("#data_5").append(html);
            console.log(result.rate_basis)
        });






    });


}



function opensearch6() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_6").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata6/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_6").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_6").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name6" id="' + result.cargo_qantity + '">';
            html += '<span >' + result.cargo_qantity + '</span>';
            html += '</div>';

            $("#data_6").append(html);
            console.log(result.cargo_qantity)
        });






    });


}



function opensearch7() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_7").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata7/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_7").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_7").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name7" id="' + result.origin_service + '">';
            html += '<span >' + result.origin_service + '</span>';
            html += '</div>';

            $("#data_7").append(html);
            console.log(result.origin_service)
        });






    });


}



function opensearch8() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_8").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata8/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_8").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_8").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name8" id="' + result.destination_service + '">';
            html += '<span >' + result.destination_service + '</span>';
            html += '</div>';

            $("#data_8").append(html);
            console.log(result.destination_service)
        });






    });


}


function opensearch9() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_9").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata9/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_9").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_9").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name9" id="' + result.special_conditions + '">';
            html += '<span >' + result.special_conditions + '</span>';
            html += '</div>';

            $("#data_9").append(html);
            console.log(result.special_conditions)
        });






    });


}


function opensearch10() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "block");
    $("#autocomplete_11").css("display", "none");

    $.post("/_searchdata10/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_10").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_10").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name10" id="' + result.commodity + '">';
            html += '<span >' + result.commodity + '</span>';
            html += '</div>';

            $("#data_10").append(html);
            console.log(result.commodity)
        });






    });


}


function opensearch11() {
    $("#autocomplete_1").css("display", "none");

    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_11").css("display", "block");
    $.post("/_searchdata11/searchQ", function(dataFound) {
        //   console.log(dataFound);
        $("#data_11").html("");

        dataFound.forEach(function(result) {

            $("#autocomplete_11").css("display", "block");

            var html = "";
            html += '<div class="menu-body-segment1 selected_name11" id="' + result.carrier_rep + '">';
            html += '<span >' + result.carrier_rep + '</span>';
            html += '</div>';

            $("#data_11").append(html);
            console.log(result.commodity)
        });

    });


}

function closesearch() {
    $("#autocomplete_1").css("display", "none");
    $("#autocomplete_2").css("display", "none");
    $("#autocomplete_3").css("display", "none");
    $("#autocomplete_4").css("display", "none");
    $("#autocomplete_5").css("display", "none");
    $("#autocomplete_6").css("display", "none");
    $("#autocomplete_7").css("display", "none");
    $("#autocomplete_8").css("display", "none");
    $("#autocomplete_9").css("display", "none");
    $("#autocomplete_10").css("display", "none");
    $("#autocomplete_11").css("display", "none");
    // 
}

function getdata(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            //   console.log(dataFound);
            if (dataFound.length !== 0) {
                $("#data_1").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_1").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name"  id="' + result.portdestination + '">';
                    html += '<span>' + result.portdestination + '</span>';
                    html += '</div>';

                    $("#data_1").append(html);
                    console.log(result.portdestination)
                });




            }
            else {
                //if no result
                $("#data_1").html("");
            }

        });


    }

}


function getdata2(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            //   console.log(dataFound);
            if (dataFound.length !== 0) {
                $("#data_2").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_2").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name2"  id="' + result.carrier + '">';
                    html += '<span>' + result.carrier + '</span>';
                    html += '</div>';

                    $("#data_2").append(html);
                    console.log(result.carrier)
                });




            }
            else {
                //if no result
                $("#data_2").html("");
            }

        });


    }

}



function getdata3(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_3").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_3").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name3"  id="' + result.bill_of_lading_oring + '">';
                    html += '<span>' + result.bill_of_lading_oring + '</span>';
                    html += '</div>';

                    $("#data_3").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_3").html("");
            }

        });


    }

}


function getdata4(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_4").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_4").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name4"  id="' + result.bill_of_lading_destination + '">';
                    html += '<span>' + result.bill_of_lading_destination + '</span>';
                    html += '</div>';

                    $("#data_4").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_4").html("");
            }

        });


    }

}



function getdata5(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_5").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_5").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name5"  id="' + result.rate_basis + '">';
                    html += '<span>' + result.rate_basis + '</span>';
                    html += '</div>';

                    $("#data_5").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_5").html("");
            }

        });


    }

}



function getdata6(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_6").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_6").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name6"  id="' + result.cargo_qantity + '">';
                    html += '<span>' + result.cargo_qantity + '</span>';
                    html += '</div>';

                    $("#data_6").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_6").html("");
            }

        });


    }

}




function getdata7(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_7").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_7").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name7"  id="' + result.origin_service + '">';
                    html += '<span>' + result.origin_service + '</span>';
                    html += '</div>';

                    $("#data_7").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_7").html("");
            }

        });


    }

}



function getdata8(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_8").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_8").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name8"  id="' + result.destination_service + '">';
                    html += '<span>' + result.destination_service + '</span>';
                    html += '</div>';

                    $("#data_8").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_8").html("");
            }

        });


    }

}



function getdata9(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_9").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_9").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name9"  id="' + result.special_conditions + '">';
                    html += '<span>' + result.special_conditions + '</span>';
                    html += '</div>';

                    $("#data_9").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_9").html("");
            }

        });


    }

}



function getdata10(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_10").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_10").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name10"  id="' + result.commodity + '">';
                    html += '<span>' + result.commodity + '</span>';
                    html += '</div>';

                    $("#data_10").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_10").html("");
            }

        });


    }

}




function getdata11(value) {
    if (value !== "") {

        $.post("/powerofattorney_searchdata/searchQ", { data: value }, function(dataFound) {
            console.log(value);
            if (dataFound.length !== 0) {
                $("#data_11").html("");

                dataFound.forEach(function(result) {

                    $("#autocomplete_11").css("display", "block");

                    var html = "";
                    html += '<div class="menu-body-segment1 selected_name11"  id="' + result.carrier_rep + '">';
                    html += '<span>' + result.carrier_rep + '</span>';
                    html += '</div>';

                    $("#data_11").append(html);
                    // console.log(result.bill_of_lading_oring)
                });




            }
            else {
                //if no result
                $("#data_11").html("");
            }

        });


    }

}





$(document).on('click', ".selected_name", function() {
    var data = $(this).attr("id");
    $("#portdestination").val(data)
});



$(document).on('click', ".selected_name2", function() {
    var data = $(this).attr("id");
    $("#carrier").val(data)
});


$(document).on('click', ".selected_name3", function() {
    var data = $(this).attr("id");
    $("#bill_of_lading_oring").val(data)
    $("#ocean_port_of_loading").val(data)
});


$(document).on('click', ".selected_name4", function() {
    var data = $(this).attr("id");
    $("#bill_of_lading_destination").val(data)
    $("#port_of_discharge").val(data)
});


$(document).on('click', ".selected_name5", function() {
    var data = $(this).attr("id");
    $("#rate_basis").val(data)
});


$(document).on('click', ".selected_name6", function() {
    var data = $(this).attr("id");
    $("#cargo_qantity").val(data)
});

$(document).on('click', ".selected_name7", function() {
    var data = $(this).attr("id");
    $("#origin_service").val(data)
});

$(document).on('click', ".selected_name8", function() {
    var data = $(this).attr("id");
    $("#destination_service").val(data)
});

$(document).on('click', ".selected_name9", function() {
    var data = $(this).attr("id");
    $("#special_conditions").val(data)
});

$(document).on('click', ".selected_name10", function() {
    var data = $(this).attr("id");
    $("#commodity").val(data)
});




$(document).on('click', ".selected_name11", function() {
    var data = $(this).attr("id");
    $("#carrier_rep").val(data)
});




$(document).ready(function() {

    $('#bill_of_lading_oring').on('keyup', function() {

        $("#ocean_port_of_loading").val($("#bill_of_lading_oring").val());

    });

    $('#bill_of_lading_destination').on('keyup', function() {

        $("#port_of_discharge").val($("#bill_of_lading_destination").val());

    });


    //get client data
    $('.newFormBtn').on('click', function() {
        //ajax call

        $.get("/clientsAjax", function(data) {
            data.forEach(function(content) {
                var clientdropdown = '';
                clientdropdown += '<option id="' + content._id + '" value="' + content._id + '">' + content.full_name + '</option>';
                $("#clientdropdown").append(clientdropdown);
                //   console.log(clientdropdown);
            });
        });

    });



    //get cosignee and cargo data
    $(document).on('change', '#clientdropdown', function() {
        var client_id = $(this).val();
        $(".table").fadeIn();
        // alert(client_id);
        //get cosignee data
        $("#consigneedropdown").html("<option>Select a Consignee</option>");
        $.get("/cosigneeDropdownData/" + client_id, function(data) {
            if (data.length === 0) {
                $("#consigneedropdown").html("<option>Select a Consignee</option>");
            }
            else {
                data.forEach(function(content) {
                    var consigneedropdown = '';
                    consigneedropdown += '<option id="' + content._id + '" value="' + content._id + '">' + content.full_name + '</option>';
                    $("#consigneedropdown").append(consigneedropdown);
                    // console.log(content);
                });
            }
        });

        //get clients cargo

        //clear table data and wait for new data from server
        $(".cargo_table_body").html("");
        //ajax call to display data
        $.get('/cargo/' + client_id + '/fetchCargo_perclient_2', function(result) {
            $(".cargo_table_body").html('');
            //  console.log(result.length);
            if (result.length !== 0) {
                result.forEach(function(content) {
                    //display data
                    var html = '';
                    html += '<tr id="cargo_rowID">';
                    html += '<td>' + (moment.parseZone(content.createdAt).format('l') === moment.parseZone(new Date()).format('l') ? 'Today' : moment(content.createdAt).format("ll")) + '</td>';
                    html += '<td style="background-color:#37474F;color:#fff;">';
                    content.Cars.forEach(function(allCars, idx, array) {
                        html += '<span id="cars_columnId' + content._id + '">' + displayCars_1(allCars.cardetails, idx, array) + '</span>';
                    });
                    html += '</td>';
                    html += '<td style="background-color:#01579b ;color:#fff;">' + content.personal_effect + '</td>';
                    html += '<td>';
                    html += '<button class="btn btn-outline-dark btn-sm next_1" id="' + content._id + '" ><i class="fas fa-arrow-right"></i> Attach this container</button>';
                    html += '</td>';
                    html += '</tr>';
                    $(".cargo_table_body").append(html);
                    //remove loader
                    $(".nodata1").css("display", "none");
                    //   console.log(content.Client[0].full_name);
                    // console.log(content.Cars);




                });
            }
            else {
                $(".nodata1").css("display", "block");
            }

        });
    });


    function displayCars_1(str, idx, array) {
        if (str !== "") {
            if (idx === array.length - 1) {
                return str;
            }
            return str + ', ';
        }
        else {
            return str;
        }
    }


    $(document).on("click", ".next_22", function(e) {
        e.preventDefault();
        $(".section1").fadeOut();
        $(".section2").fadeIn();
        // var cargo_id = $(this).attr("id");

        //pass cargo_id
        $(".cargo_id_").attr("id", "");
    });

    $(document).on("click", ".next_1", function(e) {
        e.preventDefault();
        $(".section1").fadeOut();
        $(".section2").fadeIn();
        var cargo_id = $(this).attr("id");

        //pass cargo_id
        $(".cargo_id_").attr("id", cargo_id);
    });


    $(document).on("click", ".next_2", function(e) {
        e.preventDefault();
        $(".section2").fadeOut();
        $(".section3").fadeIn();
        $(".modal-footer").fadeIn();
    });


    $(document).on("click", ".back_2", function(e) {
        e.preventDefault();
        $(".section2").fadeOut();
        $(".section1").fadeIn();
    });



    $(document).on("click", ".back_3", function(e) {
        e.preventDefault();
        $(".section3").fadeOut();
        $(".modal-footer").fadeOut();
        $(".section2").fadeIn();
    });



    //submit data
    $(document).on("click", ".createForm", function() {
        //get inputs
        var data = {};
        data.clientdropdown = $("#clientdropdown").val();
        data.consigneedropdown = $("#consigneedropdown").val();
        data.cargo_id_ = $(".cargo_id_").attr("id");

        data.portdestination = $("#portdestination").val();
        data.carrier = $("#carrier").val();
        data.insurance = $('input:radio[name=insurance]:checked').val();
        data.typeofshipment = $('input:radio[name=typeofshipment]:checked').val();
        data.typeofpayment = $('input:radio[name=typeofpayment]:checked').val();
        data.effective_date = $("#effective_date").val();
        data.expiration = $("#expiration").val();
        data.carrier_rep = $("#carrier_rep").val();

        data.bill_of_lading_oring = $("#bill_of_lading_oring").val();
        data.ocean_port_of_loading = $("#ocean_port_of_loading").val();
        data.bill_of_lading_destination = $("#bill_of_lading_destination").val();
        data.port_of_discharge = $("#port_of_discharge").val();
        data.rate = $("#rate").val();
        data.rate_basis = $("#rate_basis").val();
        data.cargo_qantity = $("#cargo_qantity").val();
        data.minimum = $("#minimum").val();
        data.maximum = $("#maximum").val();
        data.origin_service = $("#origin_service").val();
        data.destination_service = $("#destination_service").val();
        data.special_conditions = $("#special_conditions").val();
        data.commodity = $("#commodity").val();
        $.ajax({
            type: 'POST',
            url: '/poa_nra_form/new',
            data: data,
            success: function(data) {
                // console.log(data);
                location.reload();
            },
            error: function() {
                alert("Something went wrong");
            }
        });


    });




    //submit data and email
    $(document).on("click", ".createFormAndEmail", function() {
        //get inputs
        var data = {};
        data.clientdropdown = $("#clientdropdown").val();
        data.consigneedropdown = $("#consigneedropdown").val();
        data.cargo_id_ = $(".cargo_id_").attr("id");

        data.portdestination = $("#portdestination").val();
        data.carrier = $("#carrier").val();
        data.insurance = $('input:radio[name=insurance]:checked').val();
        data.typeofshipment = $('input:radio[name=typeofshipment]:checked').val();
        data.typeofpayment = $('input:radio[name=typeofpayment]:checked').val();
        data.effective_date = $("#effective_date").val();
        data.expiration = $("#expiration").val();
        data.carrier_rep = $("#carrier_rep").val();

        data.bill_of_lading_oring = $("#bill_of_lading_oring").val();
        data.ocean_port_of_loading = $("#ocean_port_of_loading").val();
        data.bill_of_lading_destination = $("#bill_of_lading_destination").val();
        data.port_of_discharge = $("#port_of_discharge").val();
        data.rate = $("#rate").val();
        data.rate_basis = $("#rate_basis").val();
        data.cargo_qantity = $("#cargo_qantity").val();
        data.minimum = $("#minimum").val();
        data.maximum = $("#maximum").val();
        data.origin_service = $("#origin_service").val();
        data.destination_service = $("#destination_service").val();
        data.special_conditions = $("#special_conditions").val();
        data.commodity = $("#commodity").val();
        $.ajax({
            type: 'POST',
            url: '/poa_nra_form/new',
            data: data,
            success: function(data) {
                // console.log(data);
                window.location.href = "/poa_nra/" + data._id + "/email/" + data.Client;
            },
            error: function() {
                alert("Something went wrong");
            }
        });


    });


    //get  id
    $(document).on('click', '.deleteMessage1', function() {
        var id = $(this).attr("id");
        $(".delete1").attr("id", id);

        //alert(state_id);
    });

    //delete Client
    $(document).on('click', '.delete1', function() {
        var id = $(this).attr("id");

        $.post("/poa_nra/" + id + "/delete?_method=DELETE", function(result) {

            location.reload();

        });
        //alert(state_id);
    });



    //display poa_nra per clients
    $("#clients_dropdown").on('change', function() {
        var id = $(this).val();
        //display loader
        $(".loader").css("display", "block");
        //clear table data and wait for new data from server
        $(".table_body").html("");
        //ajax call to display data
        $.get('/poa_nra/' + id + '/fetchCargo_perclient', function(result) {
            $(".table_body").html('');
            console.log(result.length);
            if (result.length !== 0) {
                result.forEach(function(content) {
                    //display data
                    var html = '';
                    html += '<tr id="rowID">';
                    html += '<td>' + (moment.parseZone(content.createdAt).format('l') === moment.parseZone(new Date()).format('l') ? 'Today' : moment(content.createdAt).format("ll")) + '</td>';
                    html += '<td>' + content.Client[0].full_name + '</td>';
                    html += '<td>' + (content.typeofshipment === null ? "" : content.typeofshipment) + '</td>';
                    html += '<td>' + content.port_of_discharge + '</td>';
                    html += '<td>' + (content.attachment_status === false ? "No Container Attached" : "Attached") + '</td>';
                    html += '<td>';
                    html += '<a class="btn btn-outline-dark btn-sm" href="/poa_nra/' + content._id + '/email_1/' + content.Client[0]._id + '"><i class="fas fa-envelope-open"></i> Email POA</a>';
                    html += ' <a class="btn btn-outline-success btn-sm" href="/poa_nra/' + content._id + '/email/' + content.Client[0]._id + '"><i class="fas fa-envelope-open"></i> Email NRA</a>';
                    html += ' <a class="btn btn-outline-warning btn-sm openEditModal" href="poa_nra/' + content._id + '/attach/' + content.Client[0]._id + '"><i class="far fa-edit"></i> Attach a container</a>';
                    html += ' <a class="btn btn-outline-info btn-sm openEditModal" href="/poa_nra/' + content._id + '/edit"><i class="far fa-edit"></i> Edit</a>';
                    html += ' <button class="btn btn-outline-danger btn-sm deleteMessage1" id="' + content._id + '" data-toggle="modal" data-target=".deleteMessageModal1"><i class="far fa-trash-alt"></i> Delete</button>';
                    html += '</td>';
                    html += '</tr>';
                    $(".table_body").append(html);
                    //remove loader
                    $(".loader").css("display", "none");
                    $(".nodata").css("display", "none");
                    //   console.log(content.Client[0].full_name);
                    console.log(content);


                });
            }
            else {
                $(".nodata").css("display", "block");
                $(".loader").css("display", "none");
            }

        });
    });


});
