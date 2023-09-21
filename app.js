"use strict";

let newUser = prompt(
  "Oh, hello. You've caught me in the middle of coding a webpage. What's your name?"
);

while (!newUser) {
  newUser = prompt(
    "Don't hit cancel. Don't leave the box blank. I'm being welcoming here, so just tell me your name."
  );
}

alert(
  "Hello " +
    newUser +
    "! Welcome to this webpage. It's time to learn about Mike Foster. No, don't cry."
);

function doQuiz() {
  let quizPoints = 0;

  alert(
    "Hey, " +
      newUser +
      "! Put out that cigarette and prepare to answer 5 true or false questions on the topic of Mike Foster!"
  );

  let question1 = prompt(
    "Mike once walked into a blind person because he didn't see them. Is this true, YES or NO?"
  );
  switch (question1.toLowerCase()) {
    case "yes":
      alert(
        "True! This happened in Clacton in the 1990s, which is perhaps the worst time and place Mike can think of."
      );
      quizPoints++;
      console.log(quizPoints);
      break;
    case "no":
      alert(
        "Incorrect. Mike was a child, if that protects his reputation at all."
      );
      break;
    default:
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question2 = prompt(
    "Mike had a YouTube channel where he reviewed cult movies in 10 minutes or less. Is this true, YES or NO?"
  );
  switch (question2.toLowerCase()) {
    case "yes":
      alert(
        "Incorrect. The YouTube channel was real but movies were reviewed in 5 minutes or less, not 10."
      );
      break;
    case "no":
      alert("Correct! It was 5 minutes or less.");
      quizPoints++;
      console.log(quizPoints);
      break;
    default:
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question3 = prompt(
    "Mike once picked up a ball of hair off the kitchen floor and ate it. Is this true, YES or NO?"
  );

  switch (question3.toLowerCase()) {
    case "yes":
    case "no":
      alert(
        "Undetermined. More than one person has memory of this happening, but we can't be sure whether it actually did. Seems like the sort of thing Mike would do."
      );
      quizPoints++;
      console.log(quizPoints);
      break;
    default:
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question4 = prompt(
    "Mike was once asked what he thought about the movie Pulp Fiction (1994). When he turned to see who was asking, it was Uma Thurman, complete with giant grin on her face. Is this true, YES or NO?"
  );

  switch (question4.toLowerCase()) {
    case "yes":
      alert(
        "Incorrect. The film was actually Kill Bill. She looked so pleased with herself. Mike completely froze."
      );
      break;
    case "no":
      alert(
        "Correct! The film was actually Kill Bill. If you turn around to find Uma Thurman smiling at you, please let Mike know so you can begin a support group."
      );
      quizPoints++;
      console.log(quizPoints);
      break;
    default:
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question5 = prompt(
    "Mikes primary incentive to learn to drive is that it will allow him to drive across America, trying regional burger variations on the way. Is this true, YES or NO?"
  );

  switch (question5.toLowerCase()) {
    case "yes":
      alert(
        "Absolutely correct. Ever had an Oklahoma onion burger? Mike has, and Mike has seen the face of God."
      );
      quizPoints++;
      console.log(quizPoints);
      break;
    case "no":
      alert(
        "Incorrect. It's the single most motivating factor to drive that Mike has ever encountered, including the fact that his dad was a driving instructor and could have taught him for free."
      );
      break;
    default:
      alert("Please work on your spelling. Your parents have been contacted.");
  }

  let answer = 8;
  let guesses = 4;
  let question6 = prompt(
    "Mike is thinking of a number between 1 and 10. If you're so smart, tell him what it is. You have " +
      guesses +
      " attempts remaining."
  );

  while (guesses > 1) {
    guesses--;
    if (question6 == answer) {
      alert("Woah, Psychic " + newUser + " over here! 8 is correct.");
      quizPoints++;
      console.log(quizPoints);
      break;
    } else if (question6 < answer) {
      question6 = prompt(
        "Well that's just too low. You have " + guesses + " attempts remaining."
      );
    } else if (question6 > answer) {
      question6 = prompt(
        "Too high! You have " + guesses + " attempts remaining."
      );
    }
  }
  // I can't get this working properly. If you get the right answer on the last attempt, it still says you ran out of guesses. It's because when guesses = 1 and the prompt says "you have 1 more guess" the while loop will stop running, making the final guess pointless. Can't think my way through this one without making the code more complicated and I'm sure there's a more efficient solution.

  if (guesses == 0) {
    alert("You ran out of guesses. It was 8! So obvious, duh.");
  }

  let bhutanFlag = ["yellow", "orange", "white"];

  let question7 = prompt(
    "Mike has a fascination with Bhutan. Name one of the three colours in the Bhutanese flag RIGHT NOW."
  ).toLowerCase();

  // I have no idea how to do "else" statements here for when people get the answer wrong, if that's even the solution here!

  for (let i = 0; i < bhutanFlag.length; i++) {
    if (question7 == bhutanFlag[i]) {
      alert(
        "Nicely done, " +
          newUser +
          "! You guessed " +
          question7 +
          " and the Bhutanese flag consists of " +
          bhutanFlag[0] +
          " top-left, " +
          bhutanFlag[1] +
          " bottom-right, big " +
          bhutanFlag[2] +
          " dragon in the middle holding some serious jewels."
      );
      quizPoints++;
      console.log(quizPoints);
    }
  }
  alert("You got a total of " + quizPoints + " out of 7.");
}
