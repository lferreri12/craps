function rollDice() {
    // Generate two random numbers between 1 and 6.
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
  
    // Calculate the sum of the two dice.
    var sum = die1 + die2;
  
    // Output the results to the web page.
    document.getElementById("output").innerHTML =
      "You rolled " + die1 + " and " + die2 + " for a total of " + sum;
  
    // Check for a win or loss.
    if (sum === 7 || sum === 11) {
      document.getElementById("output").innerHTML += "<br>You win!";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      document.getElementById("output").innerHTML += "<br>You lose!";
    } else {
      document.getElementById("output").innerHTML += "<br>You rolled a point.";
    }
  }