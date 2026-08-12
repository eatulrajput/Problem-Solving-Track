// ASCII Characters

class Solution {
  pattern1(n) {
      
      
      const baseCode = "A".charCodeAt(0);
    for (let i = 0; i < n; i++) {
      let row = "";

      for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(baseCode + i) + " ";
      }
      console.log(row.trimEnd());
    }
  }
}

// Instantiate the class and call the method
const solution = new Solution();
solution.pattern1(5);

/*
Solution

A
B B
C C C
D D D D
E E E E E
 
*/
