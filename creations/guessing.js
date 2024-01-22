//Goal: Make a game to calculate Lottery Winnings

function guessingGame(RinkuSutarutto){
  var RinkuSutarutto = prompt("Welcome to the Game!");
 var guessing = Math.floor(Math.random() * 1);
  for(i=1; guessed !== guessing; i++) {
      var guessed = prompt("Guess a number between 0 - 15")
if (i == 1 && guessed == guessing){
  return (console.log("OH MY GOD!!!!! YOU SHOULD PARTAKE IN THE LOTTERY!"))
} else if (i == 2 && guessed == guessing){
  return (console.log("I would spend 100 dollars on the scratch-off tickets."))
} else if (i == 3 && guessed == guessing){
  return (console.log("Today, you will be blessed with better luck!"))
} else if (i == 4 && guessed == guessing){
  return (console.log("Amazing, you have hidden talent!"))
} else if (i == 5 && guessed == guessing){
  return (console.log("Wow, you have skills to pay the bills!"))
} else if (i == 6 && guessed == guessing){
  return (console.log("You are lucky to be alive today"))
} else if (i == 7 && guessed == guessing){
  return (console.log("You've beaten this game... Congrats!"))
} else if (i == 13 && guessed == guessing){
  return (console.log("Be careful of what you do. Death is amongst you!"))
} else if (guessed == guessing){
  return (console.log("Oh... you have a " + 100 / 10**i + "% of winning the lottery.")
} else {
  console.log("Nope, try again!")

}


}
}


