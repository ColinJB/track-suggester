$(document).ready(function() {
  var result;

  $("form#survey").submit(function(event) {



    result = parseInt($("select#company").val()) + parseInt($("select#software").val()) + parseInt($("input:radio[name=demand]:checked").val()) + parseInt($("input:radio[name=content]:checked").val()) + parseInt($("input:radio[name=quick]:checked").val());

    console.log("result is: " + result);

    event.preventDefault();

  });
});
