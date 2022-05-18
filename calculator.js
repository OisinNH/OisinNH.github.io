var num1done = false;
var num2done = false;
var answerDone = false;
var num1num = false;
var num2num = false;
var answerNum = false;
var alertTriggered = false;
var answer = Number(0);
var num1 = 0;
var num2 = 0;
var correctAnswer = Number(0);
var operator = 0;
var totalCorrect = 0;
var totalIncorrect = 0;

function replace_add() {
  reset_op_colour();
  operator = 1;
  add.classList.remove('btn-outline-primary');
  add.classList.add('btn-outline-success');
};
function replace_minus() {
  reset_op_colour();
  operator = 2;
  minus.classList.remove('btn-outline-primary');
  minus.classList.add('btn-outline-success');
};
function replace_multiply() {
  reset_op_colour();
  operator = 3;
  multiply.classList.remove('btn-outline-primary');
  multiply.classList.add('btn-outline-success');
};
function replace_divide() {
  reset_op_colour();
  operator = 4;
  divide.classList.remove('btn-outline-primary');
  divide.classList.add('btn-outline-success');
};

function reset_op_colour() {
  add.classList.remove('btn-outline-success');
  minus.classList.remove('btn-outline-success');
  multiply.classList.remove('btn-outline-success');
  divide.classList.remove('btn-outline-success');
  add.classList.add('btn-outline-primary');
  minus.classList.add('btn-outline-primary');
  multiply.classList.add('btn-outline-primary');
  divide.classList.add('btn-outline-primary');
};

function submit_answer() {
  if(document.getElementById("num1input").value.length != 0)
{

num1 = num1input.value;
num1num = isNaN(num1) === false;
if (num1num == true) {
  num1done = true;
  num1 = Number(num1);
};
};
if(document.getElementById("num2input").value.length != 0)
{
num2 = num2input.value;
num2num = isNaN(num2) === false;
if (num2num == true) {
  num2done = true;
  num1 = Number(num1);
};
};
if(document.getElementById("answer_input").value.length != 0)
{
answer = answer_input.value;
answerNum = isNaN(answer_input) === false;
if (answerNum== true) {
  answerDone = true;
  answer = Number(answer);
};
};
  if(operator == 1){
correctAnswer = num1 + num2;
correct_answer.textContent = correctAnswer;
  };
  if(operator == 2){
correctAnswer = num1 - num2;
correct_answer.textContent = correctAnswer;
  };
  if(operator == 3){
correctAnswer = num1 * num2;
correct_answer.textContent = correctAnswer;
  };
  if(operator == 4){
correctAnswer = num1 / num2;
correct_answer.textContent = correctAnswer;
  };
  if (answer == correctAnswer){
    totalCorrect = totalCorrect + 1;
    correct.textContent = "Total Correct: " + totalCorrect;
    incorrect.textContent = "Total Incorrect: " + totalIncorrect;
  }
  else {
    totalIncorrect = totalIncorrect + 1;
    correct.textContent = "Total Correct: " + totalCorrect;
    incorrect.textContent = "Total Incorrect: " + totalIncorrect;
  };
};
