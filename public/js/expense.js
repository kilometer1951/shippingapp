$(document).ready(function() {
    //save Client and new
    $("#saveandnew").on("click", function(e) {
        e.preventDefault();
        if ($("#expense").val() === "") {
            return $(".error_expense").fadeIn()

        }

        if ($("#amount").val() === "") {
            return $(".error_expense").fadeIn()

        }
        return saveClients()

    });

    //save Client and close
    $("#saveandclose").on("click", function(e) {
        e.preventDefault();
        if ($("#expense").val() === "") {
            return $(".error_expense").fadeIn()

        }

        if ($("#amount").val() === "") {
            return $(".error_expense").fadeIn()

        }
        $('#newexpenseModal').modal('toggle');
        return saveClients()


    });

    function saveClients() {




        var data = {};
        data.expense = $("#expense").val();
        data.amount = $("#amount").val();


        $.post("/expense/new", { data: data }, function(result) {
            clearInputs();
            //display data
            var expense_table_body = '';

            expense_table_body += '<tr>';
            expense_table_body += '<td>' + (moment.parseZone(result.createdAt).format('l') === moment.parseZone(new Date()).format('l') ? 'Today' : moment(result.createdAt).format("ll")) + '</td>';
            expense_table_body += '<td>' + result.expense + '</td>';
            expense_table_body += '<td>' + result.amount + '</td>';
            expense_table_body += '<td>';
            expense_table_body += '<button class="btn btn-info btn-sm openEditModal" id="' + result._id + '" data-toggle="modal" data-target="#editClientModal"><i class="far fa-edit"></i> Edit</button>';
            expense_table_body += ' <button class="btn btn-danger btn-sm deleteMessage" id="' + result._id + '" data-toggle="modal" data-target=".deleteMessageModal"><i class="far fa-trash-alt"></i> Delete</button>';
            expense_table_body += '</td>';
            expense_table_body += '</tr>';

            $('.expense_table_body').prepend(expense_table_body);
            console.log(result);


        });
        clearInputs();
        var x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function() { x.className = x.className.replace("show", ""); }, 3000);
    }

    function clearInputs() {
        $("#expense").val('');
        $("#amount").val('');
    }



    //open edit modal
    $(document).on('click', '.openEditModal', function() {
        var id = $(this).attr("id");

        $(".updateRecord").attr("id", id);

        $.get("/openEditModal_expense/" + id, function(result) {

            $("#expense_edit").val(result.foundData.expense)
            $("#amount_edit").val(result.foundData.amount)


        });
    });

    $(document).on("click", ".updateRecord", function(e) {
        e.preventDefault();
        var id = $(this).attr("id");

        var data = {};
        data.expense = $("#expense_edit").val();
        data.amount = $("#amount_edit").val();

        $.post("/expense/" + id + "/edit?_method=PUT", { data: data }, function(result) {
            location.reload();
            //console.log(result);
        });
    });





    //get expense id
    $(document).on('click', '.deleteMessage', function() {
        var id = $(this).attr("id");
        $(".delete").attr("id", id);

    });

    //delete expense
    $(document).on('click', '.delete', function() {
        var id = $(this).attr("id");

        $.post("/expense/" + id + "/delete?_method=DELETE", function(result) {

            location.reload();

        });
    });



})
