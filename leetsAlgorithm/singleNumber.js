/*
* Given an array of integers, every element appears twice except for one. Find that single one.
* Note: #136 
* Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums // [1, 1, 3, 4, 3]
 * @return {number}  
 */
var singleNumber = function(nums) {
  // create: numsSeen object, and result array
  var numsSeen = {}, result = [], tempNumValue, strToNum;
  // loop through the array
  nums.forEach( function( num, idx ) {
    // compare num to object's key
    num = num.toString(); // object's key must be a String type
    if( numsSeen[num] !== undefined ) {
      // if object key is already there, increment
      numsSeen[num]++;
      // if object[key] value is greater 1, then delete object[key]
      if( numsSeen[num] > 1 ) {
        delete numsSeen[num];
      }
      // keeping track of the single pair number
      tempNumValue = num;
    }else {
      // else assign the object[key] = 1
      numsSeen[num] = 1;
       // because we know for a fact that there only a single pair number, let's keep track of it
    }
  });
  strToNum = Object.keys(numsSeen); // Object.Keys' fn is a O(n). But we know for a fact that we only have a number that does not
  // have the pair. Therefore the time complexity is n(1).
  strToNum = strToNum[0]
  //ouput result
  return parseInt(strToNum);
};


console.log(singleNumber([3, 3, 5, 7, 4, 5, 7, 4, 8, 1, 1]));