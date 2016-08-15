$(document).ready(function(){
  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "verb1", "location1", "animal1", "adjective1", "adjective2", "location2", "adjective3"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

  //   var person1Input = $("input#person1").val();
  //   var verb1Input = $("input#verb1").val();
  //   var location1Input = $("input#location1").val();
  //   var animal1Input = $("input#animal1").val();
  //   var adjective1Input = $("input#adjective1").val();
  //   var adjective2Input = $("input#adjective2").val();
  //   var location2Input = $("input#location2").val();
  //   var adjective3Input = $("input#adjective3").val();
  //
  //
  //
  // $(".person1").text(person1Input);
  // $(".verb1").text(verb1Input);
  // $(".location1").text(location1Input);
  // $(".animal1").text(animal1Input);
  // $(".adjective1").text(adjective1Input);
  // $(".adjective2").text(adjective2Input);
  // $(".location2").text(location2Input);
  // $(".adjective3").text(adjective3Input);

  $(".story").show();

  event.preventDefault();

  });


});
