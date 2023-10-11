const baseUrl =
  "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple";

const displayQuestionsAndAnswers = (contentsList) => {
  return contentsList;
};

async function getAPIContents() {
  const response = await axios.get(baseUrl);
  const contentsList = response.data.results;
  console.log(contentsList);
  // return contentsList;
}

getAPIContents();

/*
  contentsList.forEach((question) => {
      // store each question gotten in a variable
      const response = question.question;
      // console.log(response);
      // questionsList.push(response);
      for (let index = 0; index < contentsList.length; index++) {
        const question = contentsList[index];
        // console.log(question);
      }
      // console.log(questionsList);
      // append to the html through the dom
*/

/*
// get all answers in an array shuffle them with a shuffle function
    // 1. make an array to hold the answers
    // 2. add correct answer to the array (.push)
      // const correctAnswersList = question.correct_answer;
    // 3. add the incorrect answer to the array
        // const incorrectAnswersList = question.incorrect_answers;
        // answersList.push(correctAnswersList);
        // answersList.push(incorrectAnswersList);
    // 4. shuflle the array
        // answerShuffle(answersList);
    // 5. loop over the array and add to the dom
*/

// shuffle function
// const answerShuffle = (answersList) => {
//   let currentIndex = answersList.length,
//     randomIndex;
//   while (currentIndex > 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex--;

//     [answersList[currentIndex], answersList[randomIndex]] = [
//       answersList[randomIndex],
//       answersList[currentIndex],
//     ];
//   }
//   return answersList;
// };
