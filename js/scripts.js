$(function() {
  $("form#vacation-quiz").submit(function(event) {

    //Variables
    var answer1 = $("input[name=question1]:checked", "#vacation-quiz").val();
    var answer2 = $("input[name=question2]:checked", "#vacation-quiz").val();
    var answer3 = $("input[name=question3]:checked", "#vacation-quiz").val();
    var answer4 = $("input[name=question4]:checked", "#vacation-quiz").val();
    var answer5 = $("input[name=question5]:checked", "#vacation-quiz").val();
    var alaska_score = 0;
    var hawaii_score = 0;
    var vegas_score = 0;

    //Test Scoring Calculator
      if (answer1 === "vegas") {
        vegas_score += 1;
      }else if (answer1 === "hawaii") {
        hawaii_score += 1;
      }else if (answer1 === "alaska") {
        alaska_score += 1;
      }

      if (answer2 === "vegas") {
        vegas_score += 1;
      }else if (answer2 === "hawaii") {
        hawaii_score += 1;
      }else if (answer2 === "alaska") {
        alaska_score += 1;
      }

      if (answer3 === "vegas") {
        vegas_score += 1;
      }else if (answer3 === "hawaii") {
        hawaii_score += 1;
      }else if (answer3 === "alaska") {
        alaska_score += 1;
      }

      if (answer4 === "vegas") {
        vegas_score += 1;
      }else if (answer4 === "hawaii") {
        hawaii_score += 1;
      }else if (answer4 === "alaska") {
        alaska_score += 1;
      }

      if (answer5 === "vegas") {
        vegas_score += 1;
      }else if (answer5 === "hawaii") {
        hawaii_score += 1;
      }else if (answer5 === "alaska") {
        alaska_score += 1;
      }

    //Determine Test Result
    if (alaska_score > hawaii_score && alaska_score > vegas_score) {
      $("#alaska-result").show();

    }else if (hawaii_score > alaska_score && hawaii_score > vegas_score) {
      $("#hawaii-result").show();

    }else if (vegas_score > alaska_score && vegas_score > hawaii_score) {
      $("#vegasresult").show();

    //Tie-Breakers
    }else if (vegas_score === hawaii_score && vegas_score > alaska_score && hawaii_score > alaska_score) {
        $("#tie-result").show();
        $("#vegas-result").show();
        $("#hawaii-result").show();

    }else if (vegas_score === alaska_score && vegas_score > hawaii_score && alaska_score > hawaii_score) {
      $("#tie-result").show();
      $("#vegas-result").show();
      $("#alaska-result").show();

    }else if (alaska_score === hawaii_score && alaska_score > vegas_score && hawaii_score > vegas_score) {
      $("#tie-result").show();
      $("#alaska-result").show();
      $("#hawaii-result").show();

    }else if (alaska_score === vegas_score === hawaii_score) {
      $("tie-result").show();
      $("#alaska-result").show();
      $("#hawaii-result").show();
      $("#vegas-result").show();

    }else {
      $("error-result").show();
    }

    //Hide quiz upon submit
    $("#quiz-block").hide();
    $("#reset").show();

    event.preventDefault();
  });

  //Reset quiz
  $("button#reset").click(function() {
    $("#quiz-block").show();
    $("#reset").hide();
    $("#tie-result").hide();
    $("#alaska-result").hide();
    $("#hawaii-result").hide();
    $("#vegas-result").hide();
    $("#error-result").hide();
  });
});
