$(document).ready(function() {

  var result = parseInt($("select#company").val()) + parseInt($("select#software").val()) + parseInt($("input:radio[name=demand]:checked").val()) + parseInt($("input:radio[name=content]:checked").val()) + parseInt($("input:radio[name=quick]:checked").val());;
  var resultTrack;

  $("form#survey").submit(function(event) {

    var name = $("input#studentName").val();
    var email = $("input#studentEmail").val();

    if (result >= 50) {
      resultTrack = "C#";
    } else if (result < 50 && result >= 25) {
        resultTrack = "Java";
    } else if (result < 25 && result > 2) {
        resultTrack = "PHP";
    } else {
        resultTrack = "Ruby";
    }


    $("#resultOutput").fadeIn();
    $("#resultTrack").text(resultTrack);
    $("#nameOutput").text(name);
    $("#emailOutput").text(email);

    event.preventDefault();

  });
});
