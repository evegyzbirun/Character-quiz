$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    const operator1 = $("input:radio[name=operator1]:checked").val();
    let result;
    if (operator1 === "answer1") {
      result = "answer1"
     } else if (operator1 === "answer2") {
       result = "answer2"
     } else if (operator1 === "answer3") {
       result = "answer3"
     } else if (operator1 === "answer4") {
       result = "answer4"
     }
    $("#output").text(result);
  });
});