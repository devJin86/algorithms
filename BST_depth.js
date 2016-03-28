

/**
 * Problem 104
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// for the testing 

// var TreeNode = function(val) {
//   this.val = val,
//   this.left = left || null,
//   this.right = right ||null;
// }



var maxDepth = function(root) {
  var leftCounter,
      rightCounter;

  if(root === null) {return 0};

  else {

    leftCounter = maxDepth(root.left);
    rightCounter = maxDepth(root.right);
    return leftCounter > rightCounter ? // compare
             leftCounter + 1 : // true
             rightCounter + 1;
  }
};
