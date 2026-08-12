// ASCII Characters

// String Concatenation vs. Char Code Addition: In JavaScript, 'A' + i performs string concatenation rather than numeric character code addition (e.g., 'A' + 1 evaluates to "A1", not 'B').

// String Incrementing: 'A' is a string primitive in JavaScript. Incrementing a string using ch += 1 or ch++ does not move to the next alphabetical character; it turns it into a number or concatenated string (e.g., "A1").

// To handle character iteration in JavaScript, use .charCodeAt(0) to get the numeric ASCII value and String.fromCharCode() to convert it back to a character.

class Solution {
  pattern1(n) {
    const baseCode = "A".charCodeAt(0);
    // basecode will give ASCII code of A
    // console.log(baseCode)


    for (let i = 0; i < n; i++) {
      let row = "";

      for (let j = 0; j <= i; j++) {
        row += String.fromCharCode(baseCode + j) + " ";
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
A B
A B C
A B C D
A B C D E
 
*/
