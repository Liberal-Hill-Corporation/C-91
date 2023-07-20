var player1 = localStorage.getItem("Player 1");
var player2 = localStorage.getItem("Player 2");

var player1Score = 0;
var player2Score = 0;

var questionturn = player1
var answerturn = player2

document.getElementById("player1score").innerHTML = player1 + " - " + player1Score;
document.getElementById("player2score").innerHTML = player2 + " - " + player2Score;

document.getElementById("question_turn").innerHTML = "Question Turn - " + questionturn;
document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answerturn;

function send(){
   var number1 = document.getElementById("number1input").value;
   var number2 = document.getElementById("number2input").value;
   var actual_answer = parseInt(number1) * parseInt(number2);

   var question = "<h3 id='output_text'>" + number1 + " × " + number2 + "= </h3><input type='text' id='answer_input'>";
   var check = "<button onclick='check()' id='btn_check'>CHECK</button>";

   document.getElementById("question_div").innerHTML = question;
   document.getElementById("check_div").innerHTML = check;
   document.getElementById("break_div").innerHTML = "<br><br>";

   document.getElementById("number1input").value = "";
   document.getElementById("number2input").value = "";
   
   if(questionturn == player1){
      questionturn = player2
      answerturn = player1
   }
   else if(questionturn == player2){
      questionturn = player1
      answerturn = player2
   }

   document.getElementById("question_turn").innerHTML = "Question Turn - " + questionturn;
   document.getElementById("answer_turn").innerHTML = "Answer Turn - " + answerturn;
}