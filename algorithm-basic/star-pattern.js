//1)Square star pattern in javascript

let n = 5; 
// row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    string += "*";
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);

/*
    *****
    *****
    *****
    *****
    ***** 
*/
/*------------------------------------------------------------*/
//2)Hollow square pattern

let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);


/*

    *****
    *   *
    *   *
    *   *
    *****

*/
/*------------------------------------------------------------*/
//3)Right triangle pattern in javascript
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/*
              *
             **
            ***
           ****
          *****

*/

/*------------------------------------------------------------*/
//4)Left triangle pattern in javascript

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);



/*

    *
    **
    ***
    ****
    *****

*/

/*------------------------------------------------------------*/

//5)Downward Triangle Star Pattern

let n = 5;
let string = "";
for (let i = 0; i < n; i++) {
  // printing star
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/*

    *****
    ****
    ***
    **
    *

*/

/*------------------------------------------------------------*/
//6)Hollow Triangle Star Pattern

let n = 6;
let string = "";

for (let i = 1; i <= n; i++) {
  // printing star
  for (let j = 0; j < i; j++) {
    if(i === n) {
      string += "*";
    }
    else {
      if (j == 0 || j == i - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

/*

    *
    **
    * *
    *  *
    *   *
    ******

*/

/*------------------------------------------------------------*/
//7)Javascript pyramid pattern

let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/*
    *
   ***
  *****
 *******
*********

*/

/*------------------------------------------------------------*/
//8)Reversed pyramid star pattern
let n = 5;
let string = "";
// External loop
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * (n-i) - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
/*

*********
 *******
  *****
   ***
    *

*/


/*------------------------------------------------------------*/
//9)Hollow pyramid star pattern
let n = 5;
let string = "";

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    if(i === 1 || i === n) {
      string += "*";
    }
    else {
      if(k === 0 || k === 2 * i - 2) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  string += "\n";
}
console.log(string);

/*
    *
   * *
  *   *
 *     *
*********

*/

/*------------------------------------------------------------*/
//10)Diamond pattern in javascript

let n = 5;
let string = "";
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


/*

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/
/*------------------------------------------------------------*/
//11)Hollow diamond pattern
let n = 5;
let string = "";
// Upside pyramid
// upside diamond
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      string += "*";
    }
    else {
      string += " ";
    }
  }
  string += "\n";
}
// downside diamond
for (let i = 1; i <= n - 1; i++) {
    // printing spaces
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    // printing star
    for (let k = (n - i) * 2 - 1; k >= 1; k--) {
      if (k === 1 || k === (n - i) * 2 - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
    string += "\n";
  }
console.log(string);

/*
    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
*/
/*------------------------------------------------------------*/
//12)Hourglass star pattern
let n = 5;
let string = "";
// Reversed pyramid pattern
for (let i = 0; i < n; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < (n - i) * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
// pyramid pattern
for (let i = 2; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i * 2 - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

/*
*********
 *******
  *****
   ***
    *
   ***
  *****
 *******
*********
*/

/*------------------------------------------------------------*/
//13) Right pascal star pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < n - i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
/*

*
**
***
****
*****
****
***
**
*

*/

/*------------------------------------------------------------*/
//14)  Left pascal star pattern
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    string += " ";
  }
  for (let k = 0; k < n - i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
/*
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/
/*------------------------------------------------------------*/
//15) Right pascal star pattern
var n = 6;
var str = "";
for (let i = n / 2; i < n; i += 2) {
  // print first spaces
  for (let j = 1; j < n - i; j += 2) {
    str += " ";
  }
  // print first stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  // print second spaces
  for (let j = 1; j < n - i + 1; j++) {
    str += " ";
  }
  // print second stars
  for (let j = 1; j < i + 1; j++) {
    str += "*";
  }
  str += "\n";
}
// lower part
// inverted pyramid
for (let i = n; i > 0; i--) {
  for (let j = 0; j < n - i; j++) {
    str += " ";
  }
  for (let j = 1; j < i * 2; j++) {
    str += "*";
  }
  str += "\n";
}
console.log(str);
/*

 ***   ***
***** *****
***********
 *********
  *******
   *****
    ***
     *

*/