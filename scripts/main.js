let contentsList = [];
let i = 0;

const baseUrl =
  "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

const contentsListEl = document.querySelector(".quiz-app__area");

// Function to add class name to correct and incorrect boxes
// function checkAnswer() {
//   // console.log("working");
//   selectedAnswer = button;
//   console.log(selectedAnswer);

//   // For each option box, check if the user's selected option is correct and add classes to the option choices.
//   if (selectedAnswer) {
//     if (selectedAnswer.value === "API_CORRECT_ANSWER") {
//       for (let i = 0; i < "API ANSWERS ARRAY".length; i++) {
//         options[i].classList.add("answer-response-box-correct");
//       }
//     } else {
//       for (let i = 0; i < "API response/ANSWER ARRAY".length; i++) {
//         "API response/ANSWER ARRAY"[i].classList.add(
//           "answer-response-box-incorrect"
//         );
//       }
//     }
//   }
// }

const displayQuestionsAndAnswers = () => {
  contentsListEl.innerHTML = "";

  const questionEl = document.createElement("h2");
  questionEl.classList.add("quiz-app__question");
  questionEl.innerHTML = contentsList[i].question;

  const answersEL = document.createElement("div");
  answersEL.classList.add("quiz-app__options");

  answersEL.innerHTML = `
  <button class="quiz-app__option">${contentsList[i].correct_answer}</button> 
  <button class="quiz-app__option">${contentsList[i].incorrect_answers[0]}</button>
  <button class="quiz-app__option">${contentsList[i].incorrect_answers[1]}</button>
  <button class="quiz-app__option">${contentsList[i].incorrect_answers[2]}</button>`;

  const buttons = answersEL.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      selectedAnswer = button;
      console.log(selectedAnswer.innerText);

      if (selectedAnswer) {
        if (selectedAnswer.innerText === contentsList[i].correct_answer) {
          // for (let i = 0; i < "API ANSWERS ARRAY".length; i++) {
          //   options[i].classList.add("answer-response-box-correct");
          // }
          alert("go sis!!!");
        } else {
          // for (let i = 0; i < "API response/ANSWER ARRAY".length; i++) {
          //   "API response/ANSWER ARRAY"[i].classList.add(
          //     "answer-response-box-incorrect"
          //   );
          // }
          alert("booooo, try again");
        }
      }
    });
  });

  const nextQuestion = document.createElement("button");
  nextQuestion.classList.add("quiz-app__submit");
  nextQuestion.innerHTML = "Next Question";
  nextQuestion.addEventListener("click", () => {
    i++;
    displayQuestionsAndAnswers();
  });

  contentsListEl.append(questionEl);
  contentsListEl.append(answersEL);
  contentsListEl.append(nextQuestion);
};

// Add event listener to each option individually

//WHICH DIV HAS BEEN CLICKED
function handleDivClick(event) {
  // Identify which div was clicked by checking its id
  console.log(event);
  const clickedDiv = event.target;

  // Toggle a CSS class to indicate that the div has been clicked
  clickedDiv.classList.toggle("--clicked");
}

async function getAPIContents() {
  const response = await axios.get(baseUrl);
  contentsList = response.data.results;
  displayQuestionsAndAnswers();
}

getAPIContents();
