$(function() {
  $("form#vacation-quiz").submit(function(event) {

    //Variables
    var answer1 = $("input[name=question1]:checked", "#vacation-quiz").val();
    var answer2 = $("input[name=question2]:checked", "#vacation-quiz").val();
    var answer3 = $("input[name=question3]:checked", "#vacation-quiz").val();
    var answer4 = $("input[name=question4]:checked", "#vacation-quiz").val();
    var answer5 = $("input[name=question5]:checked", "#vacation-quiz").val();
    var alaska-score;
    var hawaii-score;
    var vegas-score;

    //Test Result Calculator
    if (alaska-score > hawaii-score && alaska-score > vegas-score) {
      $("#alaska-result").show();

    }if else (hawaii-score > alaska-score && hawaii-score > vegas-score) {
      $("#hawaii-result").show();

    }if else (vegas-score > alaska-score && vegas-score > hawaii-score) {
      $("#vegasresult").show();

    //Tie-Breakers
    }if else (vegas-score = hawaii-score && vegas-score > alaska-score && hawaii-score > alaska-score) {
      $("#tie-result").show();
      $("#vegas-result").show();
      $("#hawaii-result").show();

    }if else (vegas-score = alaska-score && vegas-score > hawaii-score && alaska-score > hawaii-score) {
      $("#tie-result").show();
      $("#vegas-result").show();
      $("#alaska-result").show();

    }if else (alaska-score = hawaii-score && alaska-score > vegas-score && hawaii-score > vegas-score) {
      $("#tie-result").show();
      $("#alaska-result").show();
      $("#hawaii-result").show();
    }else {
      $("error-result").show();
    }

    event.preventDefault();
  });
});
