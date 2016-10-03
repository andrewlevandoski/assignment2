jQuery(document).ready(function($){
  $("#submit-message").hide();
  $("#error-message").hide();
  $("#error-text-1").hide();
  $("#error-text-2").hide();
  $("#error-text-3").hide();
  $("#error-text-4").hide();

  $(".submit-button").click(function(){
    if(checkForm() == true) {
      $(".title-container").hide();
      $("#form").hide();
      $("#error-message").hide();
      $(".submit-button").hide();
      $("#submit-message").show();
    } else {
      $("#error-message").show();
    }
  });

  function checkForm() {
    $("#error-text-1").hide();
    $("#error-text-2").hide();
    $("#error-text-3").hide();
    $("#error-text-4").hide();

    var ret = true;

    var myName = document.forms["form-name"]["name"].value;
    var myEmail = document.forms["form-email"]["email"].value;
    var myMessage = document.forms["form-message"]["fmessage"].value;

    if(myName == null || myName == "") {
      $("#error-text-1").show();
      ret = false;
    }

    if(myEmail.indexOf('@') == -1) {
      $("#error-text-4").show();
      ret = false;
    }

    if(myEmail == null || myEmail == "") {
      $("#error-text-2").show();
      ret = false;
    }

    if(myMessage == null || myMessage == "") {
      $("#error-text-3").show();
      ret = false;
    }

    return ret;
  }
});
