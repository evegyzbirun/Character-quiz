$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    const operator1 = $("input:radio[name=operator1]:checked").val();
    const operator2 = $("input:radio[name=operator2]:checked").val();
    const operator3 = $("input:radio[name=operator3]:checked").val();

    let result;
    if (operator1 === "answer1" && operator2 === "answer1" && operator3 === "answer1") {
      result = "result 1"
     }  else if (operator1 == "answer1" && operator2 === "answer2" && operator3 === "answer1") {
      result = "result2";
     }  else if (operator1 == "answer1" && operator2 === "answer1" && operator3 === "answer2") {
      result = "result3";
     }  else if (operator1 == "answer1" && operator2 === "answer2" && operator3 === "answer2") {
      result = "result4";
     }
     if (operator1 == "answer2" && operator2 === "answer1" && operator3 === "answer1") {
      result = "result5";
     }  else if (operator1 == "answer2" && operator2 === "answer2" && operator3 === "answer1") {
      result = "result6";
     }  else if (operator1 == "answer2" && operator2 === "answer1" && operator3 === "answer2") {
      result = "result7";
     }  else if (operator1 == "answer2" && operator2 === "answer2" && operator3 === "answer2") {
      result = "result8";
     }
    $("#output").text(result);
  });
});