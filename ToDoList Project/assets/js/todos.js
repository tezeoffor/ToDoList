//Be able to mark as complete

//LONGER METHOD
// $("li").click(function() {
//   //checks if its marked
//   if ($(this).css("color") == "rgb(128, 128, 128)") {
//     //turn is back unmarked
//     $(this).css({
//       color: "black",
//       textDecoration: "none"
//     });
//   }
//   else {
//     //turn to gray(marked)
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through"
//     });
//   }
//
// });

//USING TOGGLE
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

//Click on X to delete ToDO
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500,function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//Create new todo
$("input[type='text']").keypress(function(event){
  if (event.which === 13) {
    //grab new todo from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> "+ todoText +"</li>")
  }
})

$(".fa-plus").click(function(){
  $("input").fadeToggle();
});
