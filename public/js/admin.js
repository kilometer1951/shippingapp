 $("#browse").click(function(e) {
     e.preventDefault();
     $("#filename_1").trigger('click');
 });

 $(document).on("click", "#c", function(e) {



     $.get("/companyContent", function(result) {


         console.log(result.foundData)
         var html = '';
         if (result.foundData.length === 0) {
             //       //load states data
             //      $.get("/states", function(data) {
             //       data.forEach(function(content) {
             //         var states = '';
             //         states += '<option id="'+ content._id +'" value="'+ content._id +'">'+ content.statename +'</option>';
             //         $("#state").append(states);
             //       })
             //   });
             html += '<div class="row">'
             html += '<div class="col-md-6">';
             html += '<div class="form-group"><label>FMC-OTI No</label>';
             html += ' <input class="form-control" type="text" name="fmcotino">';
             html += ' </div>';
             html += ' </div>';
             html += '<div class="col-md-6">';
             html += '<div class="form-group">';
             html += '<label>Company Name</label><input class="form-control" type="text" name="companyname">';
             html += '</div>';
             html += '</div>';
             html += '<div class="col-md-6"><div class="form-group">';
             html += '<label>Address</label><input class="form-control" type="text" name="address"></div>';
             html += ' </div>';
             html += ' <div class="col-md-6">  <div class="form-group"><label>State</label>';
             html += '<select class="form-control" id="state" name="state"><option>Select a State</option></select></div></div>';
             html += '<div class="col-md-6"> <div class="form-group"><label>City</label>';
             html += '<select class="form-control" id="city" name="city"><option>Select a City</option></select>';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group"><label>Zipcode</label>';
             html += '<input class="form-control" type="text" name="zipcode" id="zipcode">';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group">';
             html += '<label>Phone Number</label><input class="form-control" type="text" name="phonenumber">';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group"><label>Email</label>';
             html += '<input class="form-control" type="text" name="email"></div></div>';
             html += ' <div class="col-md-12"><div class="form-group"><label>Fax</label>';
             html += '<input class="form-control" type="text" name="fax"></div></div>';
             html += '</div>';
             $(".f__1").html(html);
         }
         else {
             html += '<div class="row">'
             html += '<input type="hidden" value="' + result.foundData[0]._id + '" name="id">'
             html += '<div class="col-md-6">';
             html += '<div class="form-group"><label>FMC-OTI No</label>';
             html += ' <input class="form-control" type="text" name="fmcotino1" value="' + result.foundData[0].fmcotino + '">';
             html += ' </div>';
             html += ' </div>';
             html += '<div class="col-md-6">';
             html += '<div class="form-group">';
             html += '<label>Company Name</label><input class="form-control" type="text" name="companyname1" value="' + result.foundData[0].companyname + '">';
             html += '</div>';
             html += '</div>';
             html += '<div class="col-md-6"><div class="form-group">';
             html += '<label>Address</label><input class="form-control" type="text" name="address1" value="' + result.foundData[0].address + '"></div>';
             html += ' </div>';
             html += ' <div class="col-md-6">  <div class="form-group"><label>State</label>';
             html += '<select class="form-control state1" id="state1" name="state1"></select></div></div>';
             html += '<div class="col-md-6"> <div class="form-group"><label>City</label>';
             html += '<select class="form-control" id="city1" name="city1"><option>Select a City</option></select>';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group"><label>Zipcode</label>';
             html += '<input class="form-control" type="text" name="zipcode1" id="zipcode" value="' + result.foundData[0].zipcode + '">';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group">';
             html += '<label>Phone Number</label><input class="form-control" type="text" name="phonenumber1" value="' + result.foundData[0].phonenumber + '">';
             html += '</div></div>';
             html += '<div class="col-md-6"><div class="form-group"><label>Email</label>';
             html += '<input class="form-control" type="text" name="email1" value="' + result.foundData[0].email + '"></div></div>';
             html += ' <div class="col-md-12"><div class="form-group"><label>Fax</label>';
             html += '<input class="form-control" type="text" name="fax1" value="' + result.foundData[0].fax + '"></div></div>';
             html += '</div>';
             $("#img").attr("src", result.foundData[0].photo);
             $(".f__1").html(html);

             //apend states
             result.states.forEach(function(data) {
                 var stateHtml_1 = '';
                 stateHtml_1 += '<option value="' + data._id + '" ' + ((data.statename === result.foundData[0].State.statename) ? 'selected' : '') + '>' + data.statename + '</option>';
                 $("#state1").append(stateHtml_1);
                 console.log(stateHtml_1)
                 //get selected value
                 if (data.statename === result.foundData[0].State.statename) {
                     // get the cities
                     $.get("/cities/" + data._id, function(citiesData) {
                         if (citiesData.length === 0) {
                             $("#city1").html("<option>Select a City</option>");
                         }
                         else {
                             citiesData.forEach(function(content) {
                                 var city = '';
                                 city += '<option id="' + content._id + '" value="' + content._id + '" ' + ((content._id === result.foundData[0].City._id) ? 'selected' : '') + '>' + content.cityname + '</option>';
                                 $("#city1").append(city);
                                 console.log(city);
                             });
                         }
                     });
                 }
                 // console.log(stateHtml);
             });

             $(document).on('change', '#state1', function() {
                 var state_id = $(this).val();

                 $.get("/cities/" + state_id, function(data) {
                     if (data.length === 0) {
                         $("#city1").html("<option>Select a City</option>");
                     }
                     else {
                         data.forEach(function(content) {
                             var city = '';
                             city += '<option id="' + content._id + '" value="' + content._id + '">' + content.cityname + '</option>';
                             $("#city1").append(city);
                             // console.log(content);
                         });
                     }
                 });
             });




         }


     });
 });

 //get cities data
 $(document).on('change', '#state', function() {
     var state_id = $(this).val();

     $.get("/cities/" + state_id, function(data) {
         if (data.length === 0) {
             $("#city").html("<option>Select a City</option>");
         }
         else {
             data.forEach(function(content) {
                 var city = '';
                 city += '<option id="' + content._id + '" value="' + content._id + '">' + content.cityname + '</option>';
                 $("#city").append(city);
                 // console.log(content);
             });
         }
     });
 });


 var imageLoader = document.getElementById('filename_1');
 imageLoader.addEventListener('change', handleImage, false);

 function handleImage(e) {
     var reader = new FileReader();
     reader.onload = function(event) {
         $('#img').attr('src', event.target.result);
     }
     reader.readAsDataURL(e.target.files[0])
 }









 $(document).on("click", ".addcountry", function() {
     $.post("/newCountry/" + $("#countryname").val(), function(data) {
         $("#countryname").val("");
         var html = '';
         html += '<tr>';
         html += '<td>' + data.countryname + '</td>';
         html += ' <td>';
         html += '<button class="btn btn-success btn-sm editcountry" id="' + data._id + '"><i class="fas fa-pencil-alt"></i> Edit</button> ';
         html += '<button class="btn btn-danger btn-sm del_country" id="' + data._id + '"><i class="far fa-trash-alt"></i> Delete</button>';
         html += ' </td>';
         html += '</tr>';

         $(".country_table_body").prepend(html)
     });

 });


 $(document).on('click', '.editcountry', function() {
     var id = $(this).attr("id");
     //rename buttons class and id and button text
     //put id

     $(".addcountry").text("Update");

     $(".addcountry").addClass("updateCountry");
     $(".updateCountry").attr("id", id);
     $(".addcountry").removeClass("addcountry");
     $.get("/getcontryname/" + id, function(data) {
         $("#countryname").val(data.countryname)
     });
     // console.log($(".updateCountry").attr("class"))

 });

 $(document).on('click', '.updateCountry', function() {
     var id = $(this).attr("id");
     $.post("/edit/" + $("#countryname").val() + "/" + id + "/country", function(data) {
         location.reload();
     });

 });

 $(document).on('click', '.del_country', function() {
     var id = $(this).attr("id");

     $.post("/delete/" + id + "/country", function(data) {
         location.reload();
     });
     // console.log($(".updateCountry").attr("class"))

 });





 $(document).on("click", ".addstates", function() {
     $.post("/newstate/" + $("#states").val() + "/" + $("#country_dropdown").val(), function(data) {
         $("#states").val("");
         var html = '';
         html += '<tr>';
         html += '<td>' + data.statename + '</td>';
         html += ' <td>';
         html += '<button class="btn btn-success btn-sm editstates" id="' + data._id + '"><i class="fas fa-pencil-alt"></i> Edit</button> ';
         html += '<button class="btn btn-danger btn-sm del_states" id="' + data._id + '"><i class="far fa-trash-alt"></i> Delete</button>';
         html += ' </td>';
         html += '</tr>';

         $(".states_table_body").prepend(html)
     });

 });

 $(document).on('click', '.editstates', function() {
     var id = $(this).attr("id");
     //rename buttons class and id and button text
     //put id

     $(".addstates").text("Update");

     $(".addstates").addClass("updateState");
     $(".updateState").attr("id", id);
     $(".addstates").removeClass("addstates");
     $.get("/getstatename/" + id, function(result) {

         $("#states").val(result.States.statename);

         //get countries
         //clear data first
         $("#country_dropdown").html("")
         result.Country.forEach(function(data) {
             var countryhtml = '';
             countryhtml += '<option value="' + data._id + '" ' + (data._id === result.States.Country ? "selected" : "") + '>' + data.countryname + '</option>';
             $("#country_dropdown").append(countryhtml);

         });


     });

 });


 $(document).on('click', '.updateState', function() {
     var id = $(this).attr("id");
     $.post("/edit/" + $("#states").val() + "/" + $("#country_dropdown").val() + "/" + id + "/state", function(data) {
         location.reload();
     });

 });


 $(document).on('click', '.del_states', function() {
     var id = $(this).attr("id");

     $.post("/delete/" + id + "/state", function(data) {
         location.reload();
     });
     // console.log($(".updateCountry").attr("class"))

 });


 $(document).on("click", ".addcities", function() {
     $.post("/newcity/" + $("#city").val() + "/" + $("#state_dropdown").val(), function(data) {
         $("#city").val("");
         var html = '';
         html += '<tr>';
         html += '<td>' + data.cityname + '</td>';
         html += ' <td>';
         html += '<button class="btn btn-success btn-sm editcity" id="' + data._id + '"><i class="fas fa-pencil-alt"></i> Edit</button> ';
         html += '<button class="btn btn-danger btn-sm del_city" id="' + data._id + '"><i class="far fa-trash-alt"></i> Delete</button>';
         html += ' </td>';
         html += '</tr>';

         $(".city_table_body").prepend(html)
     });

 });



 $(document).on('click', '.del_city', function() {
     var id = $(this).attr("id");

     $.post("/delete/" + id + "/city", function(data) {
         location.reload();
     });
     // console.log($(".updateCountry").attr("class"))

 });



 $(document).on('click', '.editcity', function() {
     var id = $(this).attr("id");
     //rename buttons class and id and button text
     //put id

     $(".addcities").text("Update");

     $(".addcities").addClass("updateCity");
     $(".updateCity").attr("id", id);
     $(".addcities").removeClass("addcities");
     $.get("/getcity/" + id, function(result) {

         $("#city").val(result.Cities.cityname);

         //get countries
         //clear data first
         $("#state_dropdown").html("")
         result.States.forEach(function(data) {
             var statehtml = '';
             statehtml += '<option value="' + data._id + '" ' + (data._id === result.Cities.States ? "selected" : "") + '>' + data.statename + '</option>';
             $("#state_dropdown").append(statehtml);

         });


     });

 });


 $(document).on('click', '.updateCity', function() {
     var id = $(this).attr("id");
     $.post("/edit/" + $("#city").val() + "/" + $("#state_dropdown").val() + "/" + id + "/city", function(data) {
         location.reload();
     });

 });
 