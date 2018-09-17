//Drop down nav menu
$('img.nav__burger').click(function(){
  $('div.activ_nav').slideToggle(220);
});


//Validate form
function validateForm() {
    var submit_btn = $('#submit');

    submit_btn.click(function(event){
    event.preventDefault();
      var feedback = "";
      var ime = document.getElementById("ime").value;
      var email = document.getElementById("email").value;
      var at = email.indexOf("@");
      var dot = email.lastIndexOf(".");
      var checkbox = document.getElementById("checkbox").checked;
      var poruka = document.getElementById("poruka").value;
      var msg = $('#feedback');

      if (ime == "") {
          document.getElementById('feedback').style.background = 'red';
          msg.fadeOut(1);
          msg.slideToggle(80, function(){
          feedback += 'Polje "Ime" je obavezno!';
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('feedback').style.display = 'block';
          document.getElementById('ime').style.borderColor = 'red';
          return false;
          })
        }
        else if (email == '') {
          document.getElementById('feedback').style.background = 'red';
          msg.hide(1);
          msg.slideToggle(80, function(){
          feedback += 'Polje "Email" je obavezno!';
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (at < 1 || dot < 1) {
          document.getElementById('feedback').style.background = 'red';
          msg.hide(1);
          msg.slideToggle(80, function(){
          feedback += 'Email adresa nije validna!';
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('feedback').style.background = 'red';
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (at > dot) {
          document.getElementById('feedback').style.background = 'red';
          msg.hide(1);
          msg.slideToggle(80, function(){
          feedback += 'Email adresa nije validna!';
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('email').style.borderColor = 'red';
          return false;
          })
        }
        else if (checkbox == false) {
          document.getElementById('feedback').style.background = 'red';
          msg.hide(1);
          msg.slideToggle(80, function(){
          feedback += 'Polje "nisam robot" nije oznaceno!';
          document.getElementById('feedback').innerHTML = feedback;
          return false;
          })
        }
        else if (poruka == '') {
          document.getElementById('feedback').style.background = 'red';
          msg.hide(1);
          msg.slideToggle(80, function(){
          feedback += 'Polje "Poruka" je obavezno!';
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('poruka').style.borderColor = 'red';
          return false;
          })
        }
        else if (feedback == '') {
          document.getElementById('feedback').style.background = '#54b757';
          msg.hide(1);
          msg.slideToggle( 80, function() {
          feedback += 'Forma je uspesno poslata!';
          document.getElementById('feedback').innerHTML = feedback;
          setTimeout(function(){
          msg.fadeOut(300);
          },3000)
          return false;
          });
        }
    })
  }

validateForm();
