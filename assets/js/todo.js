// function to cross out a task
// triggered when clicked on a task
$("ul").on("click", "li", function(){
  $(this).toggleClass("clicked");
});

// function to delete a task
// triggered when clicked on trash icon
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(200, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type = 'text']").on("keypress", function(event){
  if(event.which === 13){
    var text = $(this).val();
    $("ul").append("<li> <span><i class='fas fa-trash'></i></span> "+text+"</li>");
      $(this).val("");
  };
});
