class Solution {
  pattern1(n) {
    let space = 2 * (n - 1);
    // Outer row
    for (let i = 1; i <= n; i++) {
      // Reset string for each row
      let row = "";

      //   number
      for (let j = 1; j <= i; j++) {
        row += j;
      }
      // space
      for (let j = 1; j <= space; j++) {
        row += " ";
      }

      //   number
      for (let j = i; j >= 1; j--) {
        row += j;
      }

      console.log(row);
      space-=2;
    }
  }
}

// Instantiate the class and call the method
const solution = new Solution();
solution.pattern1(4);

/*
Solution

1      1
12    21
123  321
12344321

*/
