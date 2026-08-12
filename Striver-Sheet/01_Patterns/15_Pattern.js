// Method 1 solution 
// class Solution {
//   pattern1(n) {
//     const baseCode = "A".charCodeAt(0);
//     // basecode will give ASCII code of A
//     // console.log(baseCode)


//     for (let i = n-1; i >= 0; i--) {
//       let row = "";

//       for (let j = 0; j <= i; j++) {
//         row += String.fromCharCode(baseCode + j) + " ";
//       }
//       console.log(row.trimEnd());
//     }
//   }
// }

// // Instantiate the class and call the method
// const solution = new Solution();
// solution.pattern1(5);

// ____________________________________________________________

// Method 2 solution

// Code like C++ or Java without using row
// It only works for NodeJS
class Solution {
  pattern1(n) {
    const baseCode = "A".charCodeAt(0);

    for (let i = n-1; i >= 0; i--) {
      for (let j = 0; j <= i; j++) {
        // process.stdout.write does NOT add an automatic newline
        process.stdout.write(String.fromCharCode(baseCode + j) + " ");
      }
      // Add newline after each row
      process.stdout.write("\n");
    }
  }
}

const solution = new Solution();
solution.pattern1(5);


/*
Solution

A B C D E 
A B C D 
A B C 
A B 
A 
  
*/
