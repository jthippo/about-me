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

  // I can't get question 6 working properly. If you get the right answer on the last attempt, it still says you ran out of guesses. It's because when guesses = 1 and the prompt says "you have 1 more guess" the while loop will stop running, making the final guess pointless. Can't think my way through this one without making the code more complicated and I'm sure there's a more efficient solution.

  //UPDATE: Spoke about this with Jez and we did find a workaround. It was a bit messy though and I think I'd prefer to leave this as it is with it *mostly* working, just that last guess not functional. Next time I try something like this, I'll try a different methodology.

  let answer = 8;
  let guesses = 4;
  let question6 = prompt(
    "Mike is thinking of a number between 1 and 10. If you're so smart, tell him what it is. You have " +
      guesses +
      " attempts remaining."
  );
  while (guesses > 1) {
    if (question6 == answer) {
      alert("Woah, Psychic" + newUser + " over here! 8 is correct.");
      quizPoints++;
      break;
    } else if (question6 < answer) {
      guesses--;
      question6 = prompt(
        "Well that's just too low. You have " + guesses + " attempts remaining."
      );
    } else if (question6 > answer) {
      guesses--;
      question6 = prompt(
        "Too high! You have " + guesses + " attempts remaining."
      );
    }
  }

  if (guesses <= 1) {
    alert("You ran out of guesses. It was 8! So obvious, duh.");
  }

  // Question 7 is just a bit too much for me to think about thusfar. I've tried adding in code to handle the player entering incorrect entries but it breaks every time so that only "yellow" is an acceptable answer. As above, I'll come back to this sort of thing later I'm sure. I really feel like loops are the sort of things I'll love once I have mastery over them, I love logic and using information in direct ways. It really reminds me of playing guitar, where it starts off impossible and then becomes autopilot with practice.

  let bhutanFlag = ["yellow", "orange", "white"];
  let question7 = prompt(
    "Mike has a fascination with Bhutan. Name one of the three colours in the Bhutanese flag RIGHT NOW."
  ).toLowerCase();

  for (let i = 0; i < bhutanFlag.length; i++) {
    if (question7 == bhutanFlag[i]) {
      alert(
        "Nicely done, " +
          newUser +
          " ! You guessed " +
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
    }
  }
  alert(
    "That's the end of the quiz, newUser. You got a total of " +
      quizPoints +
      " questions out of 7 correct. Your certificate is in the mail. Annoyingly, it's been sent to your old address."
  );
}
