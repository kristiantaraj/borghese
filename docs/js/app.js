
       $( document ).ready(function() {



        $('#_form_3_submit').attr('disabled', 'disabled');


        $('#errorShow').click(function(){
            if ($('#check').is(':checked')) {

            } else {
                $('.error').addClass("show");
            }

             
         
        });
        

        $('#check').click(function() {
        if ($(this).is(':checked')) {
        $('.error').removeClass("show");
        $('#_form_3_submit').removeAttr('disabled');
        } else {
        $('.error').addClass("show");   
        $('#_form_3_submit').attr('disabled', 'disabled');
       
            }
        });


    });

    var submit = document.getElementById('_form_3_submit');



    submit.innerHTML = '<span id="errorShow" style="font-size: 20px;height:100%;">Invia <img style="margin-top:-2px;" src="assets/plane.png"></span>';