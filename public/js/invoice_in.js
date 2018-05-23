$(document).ready(function() {


    //INVOICE


    $(document).on("click", ".new_invoiceBTN", function() {
        //get clients
        $.get("/clientsAjax", function(data) {
            data.forEach(function(content) {
                var clientdropdown = '';
                clientdropdown += '<option id="' + content._id + '" value="' + content._id + '">' + content.full_name + '</option>';
                $("#clientdropdown").append(clientdropdown);
                //  console.log(clientdropdown);
            });
        });




    });


    // //submit data
    $(document).on("click", ".createForm", function() {


        //get inputs
        var data = {};

        data.client = $("#clientdropdown").val();
        data.booking_num = $("#booking_num").val();
        data.container_num = $("#container_num").val();

        data.port_of_dis = $("#port_of_dis").val();
        data.port_of_loading = $("#port_of_loading").val();
        data.point_and_contry_of_origin = $("#point_and_contry_of_origin").val();

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
            url: '/invoice_in/new/',
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


    //delete
    //get  id
    $(document).on('click', '.deleteMessage1', function() {
        var id = $(this).attr("id");
        $(".delete1").attr("id", id);

        //alert(state_id);
    });

    //delete Client
    $(document).on('click', '.delete1', function() {
        var id = $(this).attr("id");

        $.post("/invoice_in/" + id + "/delete?_method=DELETE", function(result) {

            location.reload();

        });
        //alert(state_id);
    });




    //display dr per clients
    $("#clients_dropdown").on('change', function() {
        var id = $(this).val();
        //display loader
        $(".loader").css("display", "block");
        //clear table data and wait for new data from server
        $(".table_body").html("");
        //ajax call to display data
        $.get('/invoice_in/' + id + '/fetch_perclient', function(result) {
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
                    html += '<a class="btn btn-warning btn-sm " href="/invoice_in/' + content._id + '/email/' + content.Client[0]._id + '"><i class="fas fa-envelope-open"></i> Email Invoice</a>';
                    html += '<a class="btn btn-info btn-sm" href="/invoice_in/' + content._id + '/editRoute"><i class="far fa-edit"></i> Edit</a>';
                    html += '<button class="btn btn-danger btn-sm deleteMessage1" id="' + content._id + '" data-toggle="modal" data-target=".deleteMessageModal1"><i class="far fa-trash-alt"></i> Delete</button>';
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
