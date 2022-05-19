var total = 0;
var done1 = 0;
var done2 = 0;
var done3 = 0;
var done4 = 0;
var done5 = 0;
var done6 = 0;
var done7 = 0;
var done8 = 0;
var done9 = 0;

function q_one() {
  if (done1 == 0) {
    answer_1.textContent = "Wrong";
    answer_1.classList.remove("btn-outline-primary");
    answer_1.classList.add("btn-outline-danger");
    if (input_1.value.toLowerCase() == "united kingdom") {
      answer_1.textContent = "Correct";
      answer_1.classList.remove("btn-outline-danger");
      answer_1.classList.add("btn-outline-success");
      done1 = 1;
      total = total + 1;
    }
  }
}

function q_two() {
  if (done2 == 0) {
    answer_2.textContent = "Wrong";
    answer_2.classList.remove("btn-outline-primary");
    answer_2.classList.add("btn-outline-danger");
    if (input_2.value.toLowerCase() == "france") {
      answer_2.textContent = "Correct";
      answer_2.classList.remove("btn-outline-danger");
      answer_2.classList.add("btn-outline-success");
      done2 = 1;
      total = total + 1;
    }
  }
}

function q_three() {
  if (done3 == 0) {
    answer_3.textContent = "Wrong";
    answer_3.classList.remove("btn-outline-primary");
    answer_3.classList.add("btn-outline-danger");
    if (input_3.value.toLowerCase() == "indonesia") {
      answer_3.textContent = "Correct";
      answer_3.classList.remove("btn-outline-danger");
      answer_3.classList.add("btn-outline-success");
      done3 = 1;
      total = total + 1;
    }
  }
}

function q_four() {
  if (done4 == 0) {
    answer_4.textContent = "Wrong";
    answer_4.classList.remove("btn-outline-primary");
    answer_4.classList.add("btn-outline-danger");
    if (input_4.value.toLowerCase() == "slovenia") {
      answer_4.textContent = "Correct";
      answer_4.classList.remove("btn-outline-danger");
      answer_4.classList.add("btn-outline-success");
      done4 = 1;
      total = total + 1;
    }
  }
}

function q_five() {
  if (done5 == 0) {
    answer_5.textContent = "Wrong";
    answer_5.classList.remove("btn-outline-primary");
    answer_5.classList.add("btn-outline-danger");
    if (input_5.value.toLowerCase() == "falkland islands") {
      answer_5.textContent = "Correct";
      answer_5.classList.remove("btn-outline-danger");
      answer_5.classList.add("btn-outline-success");
      done5 = 1;
      total = total + 1;
    }
  }
}

function q_six() {
  if (done6 == 0) {
    answer_6.textContent = "Wrong";
    answer_6.classList.remove("btn-outline-primary");
    answer_6.classList.add("btn-outline-danger");
    if (input_6.value.toLowerCase() == "faroe islands") {
      answer_6.textContent = "Correct";
      answer_6.classList.remove("btn-outline-danger");
      answer_6.classList.add("btn-outline-success");
      done6 = 1;
      total = total + 1;
    }
  }
}

function q_seven() {
  if (done7 == 0) {
    answer_7.textContent = "Wrong";
    answer_7.classList.remove("btn-outline-primary");
    answer_7.classList.add("btn-outline-danger");
    if (input_7.value.toLowerCase() == "hong kong") {
      answer_7.textContent = "Correct";
      answer_7.classList.remove("btn-outline-danger");
      answer_7.classList.add("btn-outline-success");
      done7 = 1;
      total = total + 1;
    }
  }
}

function q_eight() {
  if (done8 == 0) {
    answer_8.textContent = "Wrong";
    answer_8.classList.remove("btn-outline-primary");
    answer_8.classList.add("btn-outline-danger");
    if (
      input_8.value.toLowerCase() == "south georgia and south sandwich islands"
    ) {
      answer_8.textContent = "Correct";
      answer_8.classList.remove("btn-outline-danger");
      answer_8.classList.add("btn-outline-success");
      done8 = 1;
      total = total + 1;
    }
  }
}

function q_nine() {
  if (done9 == 0) {
    answer_9.textContent = "Wrong";
    answer_9.classList.remove("btn-outline-primary");
    answer_9.classList.add("btn-outline-danger");
    if (input_9.value.toLowerCase() == "tuvalu") {
      answer_9.textContent = "Correct";
      answer_9.classList.remove("btn-outline-danger");
      answer_9.classList.add("btn-outline-success");
      done9 = 1;
      total = total + 1;
    }
  }
}

function q_total() {
  button_total.textContent = total;
  if (total <= 2) {
    button_total.removeAttribute("class");
    button_total.classList.add("btn");
    button_total.classList.add("btn-outline-danger");
  } else if (total <= 5) {
    button_total.removeAttribute("class");
    button_total.classList.add("btn");
    button_total.classList.add("btn-outline-warning");
  } else if (total <= 8) {
    button_total.removeAttribute("class");
    button_total.classList.add("btn");
    button_total.classList.add("btn-outline-info");
  } else if (total == 9) {
    button_total.removeAttribute("class");
    button_total.classList.add("btn");
    button_total.classList.add("btn-outline-success");
  }
}

function button_home() {
  window.open("index.html", "_self");
}
function button_project_0() {
  window.open(
    "https://github.com/OisinNH/Danger-Dungeon/archive/main.zip",
    "_0"
  );
}
function button_project_1() {
  window.open(
    "https://github.com/OisinNH/Danger-Dungeon/blob/main/main.py",
    "_0"
  );
}
function button_project_2() {
  window.open("https://github.com/OisinNH/Danger-Dungeon/", "_0");
}
function button_project_3() {
  window.open("./FirstPygameProject.zip", "_0");
}
