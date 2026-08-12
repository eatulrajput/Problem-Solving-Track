class Solution {
  pattern1(n) {
    // Outer row
    for (let i = 1; i <= 2 * n - 1; i++) {
      // Reset string for each row
      let row = "";
      let star = i;
      // Star
      if (i > n) {
        star = 2 * n - i;
      }
      for (let j = 1; j <= star; j++) {
        row += " * " ;
      }

      console.log(row);
    }
  }
}

// Instantiate the class and call the method
const solution = new Solution();
solution.pattern1(5);

/*
Solution

 * 
 *  * 
 *  *  * 
 *  *  *  * 
 *  *  *  *  * 
 *  *  *  * 
 *  *  * 
 *  * 
 * 

*/
