

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

  var leftCounter = leftCounter || 0,
     rightCounter = rightCounter || 0;

  // if root doesnot contain a value
  if(root === null) return null;
  // if root left is not null
  if(root.left !== null) {
    var leftNode = root.left;
    leftNode = maxDepth(leftNode);
    // set leftNode as root
    leftNode = root;
  }
  if(root.right !== null) {
    var rightNode = root.right;
    rightNode = maxDepth(rightNode);
    rightNode = root;
  }

  // now that inverse is done


};
