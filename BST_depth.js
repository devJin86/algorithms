

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

var TreeNode = function(val) {
  this.val = val,
  this.left = left || null,
  this.right = right ||null;
}



var maxDepth = function(root) {
  var leftCounter = 0,
  var rightCounter = 0;
  if(root === null) return 0;

  else {
    leftCounter = maxDepth(root.left);
    rightCounter = maxDepth(root.right);
    return leftCounter > rightCounter ? leftCounter + 1 : rightCounter + 1;
  }
};
