/*
  @input = given number = 38,
  @digitalRoot = Number,
  @output = digitalRoot
  Required time complexity => O(1)
*/

function findDigitalRoot(number) {
  
  // create an output variable
  var digitalRoot, // output
  // split the number into each char and save it in an array
  number = number.toString().split('');
  // add number[0] + number[1]
  var testSum = Number(number[0]) + Number(number[1]);
  var tempSum = testSum.toString().split('');
  // if (number[0] + number[1]).split has length ===1 or higher
  if(tempSum.length >=1) {
    // add number[0] and number[1]
    testSum = Number(tempSum[0]) + Number(tempSum[1]);
  }
  
  digitalRoot = testSum;
 // return output
  return digitalRoot;
  }


 findDigitalRoot(56);
  


