class Solution {
  pattern1(n) {
    for (let i = 0; i < n; i++) {
      // Reset string for each row
      let row = "";

      //   Space
      for (let j = 0; j < n - i + 1; j++) {
        row += " ";
      }

      // Star
      for (let j = 0; j < 2 * i + 1; j++) {
        row += "*";
      }

      // Space
      for (let j = 0; j < n - i + 1; j++) {
        row += " ";
      }
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
       ***       
      *****      
     *******     
    *********    
   ***********   
  *************  

*/
