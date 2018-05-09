$(document).ready(function() {


    //INVOICE


    $(document).on("click", ".new_invoiceBTN", function() {
        var id = $(this).attr("id")
        $(".createForm").attr("id", id);
        $(".createFormAndEmail").attr("id", id);

    })


    // //submit data
    $(document).on("click", ".createForm", function() {
        var id = $(this).attr("id");

        //get inputs
        var data = {};

        data.ocean_freight = $("#ocean_freight").val();
        data.truck = $("#truck").val();
        data.ectn_becs = $("#ectn_becs").val();
        data.extra_charges = $("#extra_charges").val();
        data.invoice_total = $("#invoice_total").val();
        data.balance_due = $("#balance_due").val();

        data.more_invoice_fields = $("#more_invoice_fields").val();
        data.more_invoice_fields_2 = $("#more_invoice_fields_2").val();
        data.more_invoice_fields_3 = $("#more_invoice_fields_3").val();

        data.label_charge1 = $("#label_charge1").val();
        data.label_charge2 = $("#label_charge2").val();
        data.label_charge3 = $("#label_charge3").val();
        data.label_charge4 = $("#label_charge4").val();

        console.log(data)

        $.ajax({
            type: 'POST',
            url: '/invoice/new/' + id,
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




    //display dr per clients
    $("#clients_dropdown").on('change', function() {
        var id = $(this).val();
        //display loader
        $(".loader").css("display", "block");
        //clear table data and wait for new data from server
        $(".table_body").html("");
        //ajax call to display data
        $.get('/d_r/' + id + '/fetch_perclient', function(result) {
            $(".table_body").html('');
            console.log(result.length);
            if (result.length !== 0) {
                result.forEach(function(content) {
                    //display data
                    var html = '';
                    html += '<tr id="rowID">';
                    html += '<td>' + (moment.parseZone(content.createdAt).format('l') === moment.parseZone(new Date()).format('l') ? 'Today' : moment(content.createdAt).format("ll")) + '</td>';
                    html += '<td>' + content.Client[0].full_name + '</td>';
                    html += '<td>' + content.container_num + '</td>';
                    html += '<td>';
                    if (!content.invoice_exist) {
                        html += '<button class="btn btn-primary btn-sm new_invoiceBTN"  id="' + content._id + '" data-target="#new_invoice" data-toggle="modal" ><i class="far fa-file"></i> New Invoice</button>';
                    }
                    if (content.invoice_exist) {
                        html += '<a class="btn btn-warning btn-sm " href="/bill_of_lading__/' + content._id + '/email/' + content.Client[0]._id + '/cargo/' + content.Cargo + '/consignee/' + content.Consignee + '/booking_c/' + content.BookingConfirmation + '"><i class="fas fa-envelope-open"></i> Email Invoice</a>';
                        html += '<a class="btn btn-info btn-sm" href="/invoice/' + content._id + '/editRoute"><i class="far fa-edit"></i> Edit</a>';
                    }
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
