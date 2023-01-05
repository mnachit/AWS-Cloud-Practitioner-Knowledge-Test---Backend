

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="index1.css">
    <title>Document</title>
</head>
<body>
    <main>
    <!-- <div class="modal-container" id="score-modal"> -->

    <div class="modal-container" id="score-modal">

        <div class="modal-content-container">

            <h1>Congratulations, Quiz Completed.</h1>

            <div class="grade-details">
                <p>Attempts : 4</p>
                <p>Wrong Answers : <span id="wrong-answers"></span></p>
                <p>Right Answers : <span id="right-answers"></span></p>
                <p>Grade : <span id="grade-percentage"></span>%</p>
                <p ><span id="remarks" style="margin-top:9cm"></span></p>
            </div>

            <div class="modal-button-container">
                <button onclick="closeScoreModal()">Continue</button>
            </div>

        </div>
    </div>
    </div>
        <!-- creating a modal for when quiz ends -->
<!-- end of modal of quiz details-->
        <div class="game-quiz-container" id="score-modal1">
            <div class="game-details-container">
                <h1>Score : <span id="player-score">0</span> / <span id="question-number21"></span></h1>
                <div id="app_app"></div>
                <h1> Question : <span id="question-number"></span> / <span id="question-number1"></span></h1>
            </div>

            <div class="game-question-container">
                <h1 id="display-question"></h1>
            </div>

            <div class="game-options-container">

                <!-- <button onclick="access_next(this)" id="option-one-label">
                    <input type="radio" id="option-one" name="option" value="optionA" class="radio"/>
                    <label for="option-one" class="option" ></label>
                </button>
                <button onclick="access_next(this)" id="option-two-label" >
                    <input type="radio" id="option-two" name="option" value="optionB" class="radio"/>
                    <label for="option-two" class="option" ></label>
                </button>
                <button onclick="access_next(this)" >
                    <input type="radio" id="option-three" name="option" value="optionC" class="radio"/>
                    <label for="option-three" class="option" id="option-three-label"></label>
                </button>
                <button onclick="access_next(this)" >
                    <input type="radio" id="option-four" name="option" value="optionD" class="radio"/>
                    <label for="option-four" class="option" id="option-four-label"></label>
                </button> -->
                <button onclick="access_next(this)" >
                    <input type="radio" id="option-one" name="option" class="radio" value="optionA" />
                    <label for="option-one" class="option" id="option-one-label"></label>
                </button>
                <button onclick="access_next(this)">
                    <input type="radio" id="option-two" name="option" class="radio" value="optionB" />
                    <label for="option-two" class="option" id="option-two-label"></label>
                </button>

                <button onclick="access_next(this)">
                    <input type="radio" id="option-three" name="option" class="radio" value="optionC" />
                    <label for="option-three" class="option" id="option-three-label"></label>
                </button>
                <button onclick="access_next(this)">
                    <input type="radio" id="option-four" name="option" class="radio" value="optionD" />
                    <label for="option-four" class="option" id="option-four-label"></label>
                </button>


            </div>

            <div class="next-button-container">
                <button id="next_etap" onclick="next_question()">Next Question</button>
            </div>

        </div>
    </main>
    <!-- <script src="js.js"></script> -->
    <script src="index.js"></script>
</body>

</html>