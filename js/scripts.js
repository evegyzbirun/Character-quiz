$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();
    
    const operator1 = $("input:radio[name=operator1]:checked").val();
    const operator2 = $("input:radio[name=operator2]:checked").val();
    const operator3 = $("input:radio[name=operator3]:checked").val();

    let result;
    if (operator1 === "answer1" && operator2 === "answer1" && operator3 === "answer1") {
      result = "Sir Lancelot"
     }  else if (operator1 == "answer1" && operator2 === "answer2" && operator3 === "answer1") {
      result = "Cardinal Ximinez";
     }  else if (operator1 == "answer1" && operator2 === "answer1" && operator3 === "answer2") {
      result = "Michael Ellis";
     }  else if (operator1 == "answer1" && operator2 === "answer2" && operator3 === "answer2") {
      result = "Dennis Moore";
     }
     if (operator1 == "answer2" && operator2 === "answer1" && operator3 === "answer1") {
      result = "Brian";
     }  else if (operator1 == "answer2" && operator2 === "answer2" && operator3 === "answer1") {
      result = "Tim the Enchanter";
     }  else if (operator1 == "answer2" && operator2 === "answer1" && operator3 === "answer2") {
      result = "The Bishop";
     }  else if (operator1 == "answer2" && operator2 === "answer2" && operator3 === "answer2") {
      result = "Instructor Cleese";
     }
    $("#output").text(result);
  });
});