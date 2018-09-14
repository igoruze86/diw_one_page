//Drop down nav menu
$('img.nav__burger').click(function(){
  $('div.activ_nav').slideToggle(250);
});


//Validate form
function validateForm() {
    var name_error = '...polje "Ime" je obavezno!';
    var email_error = '...polje "Email" je obavezno!';
    var email_error_structure = '...email adresa nije validna!';
    var email_error_structure2 = '...email adresa nije validna!';
    var checkbox_error = '...polje "nisam robot" nije oznaceno!';
    var message_error = '...polje "Poruka" je obavezno!';
    var error_feedback = "";
    var ime = document.getElementById("ime").value;
    var email = document.getElementById("email").value;
    var at = email.indexOf("@");
    var dot = email.lastIndexOf(".");
    var checkbox = document.getElementById("checkbox").checked;
    var poruka = document.getElementById("poruka").value;

    if (ime == "") {
        error_feedback += name_error;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        document.getElementById('ime').style.borderColor = 'red';
        return false;
      }
      else if (email == '') {
        error_feedback += email_error;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        document.getElementById('email').style.borderColor = 'red';
        return false;
      }
      else if (at < 1 || dot < 1) {
        error_feedback += email_error_structure;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        document.getElementById('email').style.borderColor = 'red';
        return false;
      }
      else if (at > dot) {
        error_feedback += email_error_structure2;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        document.getElementById('email').style.borderColor = 'red';
        return false;
      }
      else if (checkbox == false) {
        error_feedback += checkbox_error;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        return false;
      }
      else if (poruka == '') {
        error_feedback += message_error;
        document.getElementById('error_feedback').innerHTML = error_feedback;
        document.getElementById('poruka').style.borderColor = 'red';
        return false;
      }
      else {
        return true;
      }
    }
