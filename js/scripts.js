  
// toggling image and text 
$(document).ready(function() {
    $(".clickable1").click(function() {
        $(".design-hidden").toggle();
        $(".design-showing").toggle();
    });
  });
  $(document).ready(function() {
    $(".clickable2").click(function() {
        $(".development-hidden").toggle();
        $(".development-showing").toggle();
    });
  });
  $(document).ready(function() {
    $(".clickable3").click(function() {
        $(".product-hidden").toggle();
        $(".product-showing").toggle();
    });
  });
  /* alert for when form name is blank
  function checkforblank() {
    if (document.getElementById('name').value == "") {
      alert('please enter your name');
      document.getElementById('name').style.borderColor = "red";
      return false;
    }
  }*/

 function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;
    
    error_message.style.padding = "10px";
    
    if(name.length <5){
      text = "Please Enter a Valied Name";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 ||email.length < 6){
      text = "Please Enter a Valied E-mail";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More than 140 characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Thank you, Submission Successful")
    return true;
 }

 $(document).ready(function(){
  $(".btn").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "white");
  });
});
/*$("btn").click(function(){
  $("#div1").fadeIn();
  $("#div2").fadeIn("slow");
  $("#div3").fadeIn(3000);
});*/