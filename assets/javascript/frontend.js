$(document).ready(function() {

  $("#search").click(function(event) {
    console.log("clicked");
    event.preventDefault();
    $(".results .panel-body").empty();
  });

  $("#clear").click(function(event) {
    console.log("clicked");
    event.preventDefault();
    $(".results .panel-body").empty();
  });

});
