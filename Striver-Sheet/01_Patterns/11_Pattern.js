class Solution {
  pattern1(n) {
    // Outer row
    let start = 1;
    for (let i = 0; i < n; i++) {
      // Reset string for each row
      let row = "";
      if (i % 2 == 0) start = 1;
      else start = 0;
      // Star
      for (let j = 0; j <= i; j++) {
        row += start + " ";
        start = 1 - start;
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

1 
0 1 
1 0 1 
0 1 0 1 
1 0 1 0 1  

*/
