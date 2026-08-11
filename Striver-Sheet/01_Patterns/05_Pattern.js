class Solution {
  pattern1(n) {
    for (let i = 1; i < n; i++) {
      // Reset string for each row
      let row = "";
      for (let j = 1; j< n - i + 1; j++) {
        row += " * ";
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


 *  *  *  *  *  * 
 *  *  *  *  * 
 *  *  *  * 
 *  *  * 
 *  * 
 * 

*/ 