//Drop down nav menu
$('img.nav__burger').click(function(){
  $('div.activ_nav').slideToggle(250);
});


//Validate form
function validateForm() {
    var submit_btn = $('#submit');

    submit_btn.click(function(event){
    event.preventDefault();
      var name_error = '...polje "Ime" je obavezno!';
      var email_error = '...polje "Email" je obavezno!';
      var email_error_structure = '...email adresa nije validna!';
      var email_error_structure2 = '...email adresa nije validna!';
      var checkbox_error = '...polje "nisam robot" nije oznaceno!';
      var message_error = '...polje "Poruka" je obavezno!';
      var success_message = 'Forma je uspesno poslata';
      var error_feedback = "";
      var success_feedback = "";
      var ime = document.getElementById("ime").value;
      var email = document.getElementById("email").value;
      var at = email.indexOf("@");
      var dot = email.lastIndexOf(".");
      var checkbox = document.getElementById("checkbox").checked;
      var poruka = document.getElementById("poruka").value;
      var error_msg = $('#error_feedback');
      var success_msg = $('#success_feedback');

      if (ime == "") {
        success_msg.fadeOut(300);
        error_msg.fadeIn(300, function(){
          error_feedback += name_error;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          document.getElementById('ime').style.borderColor = 'red';
          return false;
          })
        }
        else if (email == '') {
          success_msg.fadeOut(300);
          error_msg.fadeIn(300, function(){
          error_feedback += email_error;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (at < 1 || dot < 1) {
          success_msg.fadeOut(300);
          error_msg.fadeIn(300, function(){
          error_feedback += email_error_structure;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (at > dot) {
          success_msg.fadeOut(300);
          error_msg.fadeIn(300, function(){
          error_feedback += email_error_structure2;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (checkbox == false) {
          success_msg.fadeOut(300);
          error_msg.fadeIn(300, function(){
          error_feedback += checkbox_error;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          return false;
          })
        }
        else if (poruka == '') {
          success_msg.fadeOut(300);
          error_msg.fadeIn(300, function(){
          error_feedback += message_error;
          document.getElementById('error_feedback').innerHTML = error_feedback;
          document.getElementById('poruka').style.borderColor = 'red';
          return false;
          })
        }
        else if (error_feedback == '') {
          error_msg.fadeOut( 300, function() {
              success_msg.fadeIn( 300, function() {
              success_feedback += success_message;
              document.getElementById('success_feedback').innerHTML = success_feedback;
              setTimeout(function(){
                success_msg.fadeOut(300);
              },1500)
              return false;
            });
          });
        }
    })
  }

validateForm();
