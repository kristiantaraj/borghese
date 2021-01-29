
       $( document ).ready(function() {

        $('#_form_3_submit').attr('disabled', 'disabled');
           

        $('#check').click(function() {
        if ($(this).is(':checked')) {
        $('#_form_3_submit').removeAttr('disabled');
        } else {
        $('#_form_3_submit').attr('disabled', 'disabled');
            }
        });
    });

    var submit = document.getElementById('_form_3_submit');

    submit.innerHTML = '<span style="font-size: 20px; margin-right: 5px;">Invia</span> <img style="margin-top:-2px;" src="assets/plane.png">';