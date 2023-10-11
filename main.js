
document.getElementById('submit-btn').onclick = function() {
    // Get the user's answer
    var answer = document.getElementById('answer').value.trim().toLowerCase();
  
    // Define the correct answer in lower case
    var correctAnswer = "paris";
  
    // Check the user's answer against the correct answer
    if(answer === correctAnswer) {
      // If correct, display success message
      document.getElementById('result').textContent = "Correct! 🎉";
      document.getElementById('result').style.color = "green";
    } else {
      // If incorrect, display failure message
      document.getElementById('result').textContent = "Sorry, that's not correct. 😢";
      document.getElementById('result').style.color = "red";
    }
  }