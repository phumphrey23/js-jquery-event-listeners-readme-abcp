//define functions here

$(document).ready(function() {
  getIt();
  frameIt();
  pressIt();
  sunbitIt();
});


function getIt() {
  $('p').on("click", function() {
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty')
  })
}
function pressIt(){
 $("form").on("keydown",function(key){
   if (key.which==71){
     alert('g was pressed')
   }
 })
}

function submitIt(){
  $("form").on("submit", function(){
  return alert("Your form is going to be submitted now.")
  })
}
