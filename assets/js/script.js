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
      var error = 'Proverite da li ste pravilno popunili sva polja, pa pokusajte ponovo!';
      var success = 'Poruka je uspesno poslata!';
      var boxlabel = $('boxlabel');

      if (ime == "") {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('ime').style.borderColor = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (email == '') {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("feedback_display_none");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('email').style.borderColor = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (at < 1 || dot < 1) {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('email').style.borderColor = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (at > dot) {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('email').style.borderColor = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (checkbox == false) {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('boxlabel').style.color = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (poruka == '') {
        msg.slideUp(300, function(){
          msg.removeClass("success_msg");
          msg.removeClass("error_msg");
          msg.addClass("error_msg");
          feedback += error;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('msglabel').style.color = 'red';
          msg.slideDown(300);
        })
        return false;
      }
      else if (feedback == '') {
        msg.slideUp(300, function(){
          msg.removeClass("error_msg");
          msg.addClass("success_msg");
          feedback += success;
          document.getElementById('feedback').innerHTML = feedback;
          document.getElementById('ime').style.borderColor = '#919191';
          document.getElementById('email').style.borderColor = '#919191';
          document.getElementById('boxlabel').style.color = 'black';
          document.getElementById('msglabel').style.color = '#919191';
          msg.slideToggle(300);
        })
        return true;
      }
    })
  }

validateForm();
