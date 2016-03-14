$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#emailAddress').append('<h3>Thans for entering your email, ' + email + ', you will now receive spam! </h3>');
  });
});
