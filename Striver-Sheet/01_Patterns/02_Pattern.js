class Solution {
  pattern1(n) {
    for (let i = 0; i < n; i++) {
      // Reset string for each row
      let row = "";
      for (let j = 0; j<= i; j++) {
        row += " *";
      }
      // Prints entire row on one line
      console.log(row);
    }
  }
}

// Instantiate the class and call the method
const solution = new Solution();
solution.pattern1(7);

/*
Solution

 *
 * *
 * * *
 * * * *
 * * * * *
 * * * * * *
 * * * * * * *

*/ 