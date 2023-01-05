var data_json_parse;
async function getText() 
{
    let myObject = await fetch("questions.php");
    // console.log(myObject);
    let myText = await myObject.text();
    // console.log(myText);
    data_json_parse = JSON.parse(myText);
    // console.log(data_json_parse);
    // data_json_parse = data_json;
    
    afficher_data(data_json_parse);
    let x =(document.querySelectorAll(".radio"))
    // console.log(x);
    
    x.forEach(box => {
    box.parentElement.style.backgroundColor = "white";
    // box.parentElement.disabled = false;
      // console.log(box);  
    });
    data_lenght(data_json_parse);
    // console.log(data_lenght(data_json_parse));
    return data_json_parse;
    
    // next_question(data_json);
    // var Parts = data_json;
    // data(data_json);
    // console.log(data_json_parse.length)
}

function data_lenght(data2)
{   
    document.getElementById('question-number1').innerHTML = data2.length;
    document.getElementById('question-number21').innerHTML = data2.length;
    return data2.length;
}

getText();

var temp="a";
var count = 1;
// var length_parts = data_json_parse.length;
function afficher_data(data)
{
    if(temp != "a"){
        data.splice(temp, 1);
    }

    if (data.length == 0)
    {
        // window.location.href = "index.php";
        document.getElementById('score-modal').style.display = "block";
        document.getElementById('wrong-answers').innerHTML = 3 - countscore1;
        document.getElementById('right-answers').innerHTML = countscore1 - 1;
        var grade = ((countscore1 - 1) / 2) * 100;
        document.getElementById('grade-percentage').innerHTML = grade;
        if (grade <= 30) {
            remark = "Bad Grades, Keep Practicing."
            remarkColor = "red"
        }
        else if (grade >= 40 && grade < 70) {
            remark = "Average Grades, You can do better."
            remarkColor = "orange"
        }
        else if (grade >= 100) {
            remark = "Excellent, Keep the good work going."
            remarkColor = "green"
        }
        document.getElementById('remarks').innerHTML = remark;
        document.getElementById('remarks').style.color = remarkColor;
    }
    var random;
    random = Math.floor((Math.random() * data.length));
    // console.log(data.question);
    // document.getElementById("option-one-label1").innerHTML = data[random].options;
    // document.getElementById("option-one-label").innerHTML = data[random].question;
    // box.parentElement.style.backgroundColor = "white";
    document.getElementById('display-question').innerHTML = data[random].question;
    document.getElementById('option-one-label').innerHTML = data[random].options[0];
    document.getElementById('option-two-label').innerHTML = data[random].options[1];
    document.getElementById('option-three-label').innerHTML = data[random].options[2];
    document.getElementById('option-four-label').innerHTML = data[random].options[3];
    
    document.getElementById('question-number').innerHTML = count++;
    
    document.getElementById("next_etap").disabled = true;

    // var length_parts = data.length;
    // console.log(length_parts);
    temp = random;
}

var answer_user="";
var countscore = 1;
var countscore1 = 1;
function next_question()
{
    const COLOR_CODES = {
        info: {
          color: "green"
        },
        warning: {
          color: "orange",
          threshold: WARNING_THRESHOLD
        },
        alert: {
          color: "red",
          threshold: ALERT_THRESHOLD
        }
      };
    // let data_ = data(data__);
  if(answer_user === data_json_parse[temp].answer)
  {
    document.getElementById("player-score").innerHTML = countscore++;
    console.log('correct');
    countscore1 = countscore;
    // console.log(temp);
    // let x =(document.querySelectorAll(".radio"))
    
  

    // x.forEach(box => {
      
    //   if (!box.checked)
    //   {
    //     box.parentElement.style.backgroundColor = "red";
    //   }
    // });
    
  }else if(answer_user != data_json_parse[temp].answer){
    console.log('incorrect');
    console.log(data_json_parse[temp].answer);
  }
    
    afficher_data(data_json_parse);
    onTimesUp();
    timePassed = -1;
    startTimer();

    let x =(document.querySelectorAll(".radio"))
    // console.log(x);
    
    x.forEach(box => {
    box.parentElement.style.backgroundColor = "white";
    box.parentElement.disabled = false;
      // console.log(box);  
    });
    
}

function access_next(answer)
{
  let x =(document.querySelectorAll(".radio"));
  setTimeout(()=>{
  console.log(answer.innerText);
    
  x.forEach(box => {
    //box.parentElement.style.backgroundColor = "white";
      // console.log(box);
      // console.log(box.parentElement.innerHTML);
    if (!box.checked)
      {
        // console.log(!box.console.log(box);hecked);
        // box.parentElement.style.backgroundColor = "red";
        // console.log("lalalala");
        box.parentElement.disabled = true;

      }

      if (box.checked)
      {
          
        if (box.parentElement.innerText== data_json_parse[temp].answer) 
        {
          box.parentElement.style.backgroundColor = "green";
        }
        else
        {
        box.parentElement.style.backgroundColor = "red";
        x.forEach((boxz)=>{
          
          if (boxz.parentElement.innerText== data_json_parse[temp].answer) {
            boxz.parentElement.style.backgroundColor="green"
          }
          
        })
        }
        // console.log();
        // console.log(!box.checked);
        // console.log("lalalala");
        box.parentElement.disabled = true;

      }


    });
  }, 0000);
  answer_user = answer.innerText;
  // console.log(answer_user);
  // console.log(Parts[temp].correct);
  document.getElementById("next_etap").disabled = false;
  
}

// function handleEndGame() {
//     let remark = null
//     let remarkColor = null

//     // document.getElementById('score-modal').style.display = "flex"
//     // condition check for player remark and remark color
//     if (playerScore <= 3) {
//         remark = "Bad Grades, Keep Practicing."
//         remarkColor = "red"
//     }
//     else if (playerScore >= 4 && playerScore < 7) {
//         remark = "Average Grades, You can do better."
//         remarkColor = "orange"
//     }
//     else if (playerScore >= 7) {
//         remark = "Excellent, Keep the good work going."
//         remarkColor = "green"
//     }
//     const playerGrade = (playerScore / 10) * 100

//     //data to display to score board
//     document.getElementById('remarks').innerHTML = remark
//     document.getElementById('remarks').style.color = remarkColor
//     document.getElementById('grade-percentage').innerHTML = playerGrade
//     document.getElementById('wrong-answers').innerHTML = 4;
//     document.getElementById('right-answers').innerHTML = playerScore
// }
// Credit: Mateusz Rybczonec

const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 4;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
var remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app_app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

startTimer();

function onTimesUp() {
  clearInterval(timerInterval);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
      next_question();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

function closeScoreModal() {
    countscore = 1
    countscore1 = 1;
    answer_user="";
    count = 1;
    grade = 0;
    random = 0;
    getText();
    document.getElementById('score-modal').style.display = "none";
    location.reload();
}