class Solution {
  pattern1(n) {
    let num = 1;

    // Outer row
    for (let i = 1; i <= n; i++) {
      // Reset string for each row
      let row = "";

      for (let j = 1; j <= i; j++) {
        row += num + " ";
        num += 1;
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
2 3 
4 5 6 
7 8 9 10 
11 12 13 14 15 
 
*/
