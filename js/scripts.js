$(function() {
  $("form#vacation-quiz").submit(function(event) {

    //Variables
    var answer1 = $("input[name=question1]:checked", "#vacation-quiz").val();
    var answer2 = $("input[name=question2]:checked", "#vacation-quiz").val();
    var answer3 = $("input[name=question3]:checked", "#vacation-quiz").val();
    var answer4 = $("input[name=question4]:checked", "#vacation-quiz").val();
    var answer5 = $("input[name=question5]:checked", "#vacation-quiz").val();
    var alaska_score;
    var hawaii_score;
    var vegas_score;

    //Test Scoring Calculator
    for (answer-value === 1; answer-value < 6; answer-value ++) {
      if (answer[answer-value] === "vegas") {
        vegas_score += 1;
      }else if (answer[answer-value] === "hawaii") {
        hawaii_score += 1;
      }else if (answer[answer-value] === "alaska") {
        alaska_score += 1;
      }
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
    }else {
      $("error-result").show();
    }

    //Toggle quiz/results view
    $("vacation-quiz").hide();

    event.preventDefault();
  });
});
