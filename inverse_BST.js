/**
 * Problem 226
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
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
    // now that we set root;
    root.left = null;
    root.right = null;

    return root;
};