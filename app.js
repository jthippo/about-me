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
  alert(
    "Hey, " +
      newUser +
      "! Put out that cigarette and prepare to answer 5 true or false questions on the topic of Mike Foster!"
  );
  let question1 = prompt(
    "Mike once walked into a blind person because he didn't see them. Is this true, YES or NO?"
  );
  console.log(question1);
  console.log(question1.toLowerCase());
  switch (question1.toLowerCase()) {
    case "yes":
      // console.log(
      alert(
        "True! This happened in Clacton in the 1990s, which is perhaps the worst time and place Mike can think of."
      );
      break;
    case "no":
      // console.log(
      alert(
        "Incorrect. Mike was a child, if that protects his reputation at all."
      );
      break;
    default:
      // console.log(
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question2 = prompt(
    "Mike had a YouTube channel where he reviewed cult movies in 10 minutes or less. Is this true, YES or NO?"
  );
  console.log(question2);
  console.log(question2.toLowerCase());
  switch (question2.toLowerCase()) {
    case "yes":
      // console.log(
      alert(
        "Incorrect. The YouTube channel was real but movies were reviewed in 5 minutes or less, not 10."
      );
      break;
    case "no":
      // console.log(
      alert("Correct! It was 5 minutes or less.");
      break;
    default:
      // console.log(
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question3 = prompt(
    "Mike once picked up a ball of hair off the kitchen floor and ate it. Is this true, YES or NO?"
  );
  console.log(question3);
  console.log(question3.toLowerCase());
  switch (question3.toLowerCase()) {
    case "yes":
    case "no":
      // console.log(
      alert(
        "Undetermined. More than one person has memory of this happening, but we can't be sure whether it actually did. Seems like the sort of thing Mike would do."
      );
      break;
    default:
      // console.log(
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question4 = prompt(
    "Mike was once asked what he thought about the movie Pulp Fiction (1994). When he turned to see who was asking, it was Uma Thurman, complete with giant grin on her face. Is this true, YES or NO?"
  );
  console.log(question4);
  console.log(question4.toLowerCase());
  switch (question4.toLowerCase()) {
    case "yes":
      // console.log(
      alert(
        "Incorrect. The film was actually Kill Bill. She looked so pleased with herself. Mike completely froze."
      );
      break;
    case "no":
      // console.log(
      alert(
        "Correct! The film was actually Kill Bill. If you turn around to find Uma Thurman smiling at you, please let Mike know so you can begin a support group."
      );
      break;
    default:
      // console.log(
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let question5 = prompt(
    "Mikes primary incentive to learn to drive is that it will allow him to drive across America, trying regional burger variations on the way. Is this true, YES or NO?"
  );
  console.log(question5);
  console.log(question5.toLowerCase());
  switch (question5.toLowerCase()) {
    case "yes":
      // console.log(
      alert(
        "Absolutely correct. Ever had an Oklahoma onion burger? Mike has, and Mike has seen the face of God."
      );
      break;
    case "no":
      // console.log(
      alert(
        "Incorrect. It's the single most motivating factor to drive that Mike has ever encountered, including the fact that his dad was a driving instructor and could have taught him for free."
      );
      break;
    default:
      // console.log(
      alert("Please work on your spelling. Your parents have been contacted.");
  }
  let guesses = 4;
  let question6 = prompt(
    "Mike is thinking of a number between 1 and 13. If you're so smart, tell him what it is. You have " +
      guesses +
      " attempts remaining."
  );
  while (question6 != 8) {
    if (question6 < 8) {
      guesses--;
      question6 = prompt(
        "Well that's just too low. You have " + guesses + " attempts remaining."
      );
    } else if (question6 > 8) {
      guesses--;
      question6 = prompt(
        "Too high! You have " + guesses + " attempts remaining."
      );
    }
    if (guesses === 1) {
      alert("You ran out of guesses. It was 8! So obvious, duh.");
      break;
    }
  }
  if (question6 == 8) {
    alert("Woah, Psychic " + newUser + " over here! 8 is correct.");
  }
}
