/*
=======================================================

** Week 4 - Project 1 **
*** jQuery! ***

For any methods that we didn't cover, please refer to the jQuery documentation.
https://api.jquery.com/

BASIC TRACK: 1-8
ADVANCED TRACK: 9-12
=======================================================
*/

// Add your JS here.

// Question 1
$(document).ready(function(){  
  
  $(".hideMe").click(function(){         
    $("p").hide()})
  });

  // Questions 2 - 5
  $(document).ready(function(){  
    
    $(".changeColor").click(function(){         
      $(".li3").css('color', ' #8A2BE2')});
    
    $(".li4").click(function(){
      
      $("<li id='4a'>another one - DJ Khaled</li>").insertAfter(".li4")});

    $(".removeLi").click(function(){
      
      $(".li2").hide()});
    
    $(".li5").click(function(){
      
      $(".li5").css('font-size','40px')
      $(".divmenu li").not(".li5").hide();
    })
    
  });

// Question 6
$(document).ready(function(){  
  
  $(".cute").click(function(){
    $(".cute").clone().appendTo(".moreCute")});
});

//Question 7
$(document).ready(function(){  
  
  $("#makeSquare").dblclick(function(){
    $("#makeSquare").css('width','120px')
  $("#makeSquare").css('border-radius','120px')});
});

//Question 8
$(document).ready(function(){  
  
  $("#dontClick").click(function(){
   alert("I said Don't!");
  });
});

    
    
