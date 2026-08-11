// prints every star on a new line
// In JavaScript, console.log() automatically appends a newline character (\n) every time it runs.

class Solution {
  pattern1(n) {
    for (let i = 0; i < n; i++) {
      // Reset string for each row
      let row = "";
      for (let j = 0; j < n; j++) {
        row += " *";
      }
      // Prints entire row on one line
      console.log(row);
    }
  }
}

// Instantiate the class and call the method
const solution = new Solution();
solution.pattern1(4);
solution.pattern1(7);

/*
Solution

 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 * * * * * * *
 
*/ 