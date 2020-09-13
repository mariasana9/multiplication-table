let answer = document.querySelector("#answer");
let task = document.querySelector(".task");
let correct = document.querySelector(".correct-ans");
let wrong = document.querySelector(".wrong-ans");
let green = document.querySelector('.correct'); //
let value_one,
  value_two,
  new_task,
  result,
  cor_count = 0,
  wrong_count = 0;
renderTask();

answer.addEventListener("keypress", (e) => {
  if (e.code == "Enter" && answer.value != "") {
    let answ = task.innerText.split("*");
    answ = answ[0] * answ[1];
    if (answ == answer.value) {
      checker("true");
      cor_count++;
      correct.innerText = cor_count;
    } else {
      checker("false");
      wrong_count++;
      wrong.innerText = wrong_count;
      green.innerText = answ;
    }
    setTimeout(renderTask, 2000);
  }
});

function checker(value) {
  if (value == "true") {
    task.classList += " correct";
  } else {
    task.classList += " wrong";
  }
  setTimeout(function (e) {
    task.classList = "task";
  }, 2000);
}
function renderTask() {
  answer.value = "";
  value_one = Math.floor(Math.random() * 9) + 1;
  value_two = Math.floor(Math.random() * 9) + 1;
  // Add Task to Display
  new_task = `${value_one} * ${value_two}`;
  task.innerText = new_task;
}

function isNumberKey(evt) {
  console.log(evt.keyCode);
  var charCode = evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}
