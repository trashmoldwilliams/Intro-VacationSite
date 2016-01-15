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
    
    event.preventDefault();
  });
});
